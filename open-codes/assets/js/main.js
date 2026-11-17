// Open Codes: grouping, search, author filter and copy-to-clipboard.
// The page works without this script: projects are then listed by year.
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // ----- Copy BibTeX -----
  document.querySelectorAll("[data-copy-target]").forEach(function (button) {
    var label = button.textContent;
    button.addEventListener("click", function () {
      var target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) return;
      var done = function (text) {
        button.textContent = text;
        setTimeout(function () { button.textContent = label; }, 1800);
      };
      var selectText = function () {
        var range = document.createRange();
        range.selectNodeContents(target);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        done("Selected. Press Ctrl/Cmd + C");
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(target.textContent).then(function () { done("Copied"); }, selectText);
      } else {
        selectText();
      }
    });
  });

  // ----- Returning from a project page to the same place on the home page -----
  // The home page remembers its view (grouping, author, search text, scroll position)
  // when a visitor leaves it. The floating "Back to projects" button on a project page
  // asks the home page to restore that view.
  var STATE_KEY = "open-codes-home-state";
  var RESTORE_KEY = "open-codes-restore";
  function store(key, value) { try { window.sessionStorage.setItem(key, value); } catch (error) { /* storage unavailable */ } }
  function load(key) { try { return window.sessionStorage.getItem(key); } catch (error) { return null; } }
  function forget(key) { try { window.sessionStorage.removeItem(key); } catch (error) { /* storage unavailable */ } }

  document.querySelectorAll("[data-back]").forEach(function (link) {
    link.addEventListener("click", function () { store(RESTORE_KEY, "1"); });
  });

  // ----- Home page: group by area, year or author, and search -----
  var container = document.getElementById("groups");
  if (!container) return;

  var cards = Array.prototype.slice.call(container.querySelectorAll(".card"));
  var noResults = document.getElementById("no-results");
  var search = document.getElementById("project-search");
  var authorBar = document.getElementById("author-bar");
  var buttons = document.querySelectorAll("[data-group-by]");

  // Area names, order and descriptions come from _data/areas.yml, embedded in the page.
  var areas = [];
  try {
    areas = JSON.parse(document.getElementById("areas-data").textContent) || [];
  } catch (error) { areas = []; }

  function authorsOf(card) {
    var value = card.getAttribute("data-authors") || "";
    return value.split("|").filter(function (name) { return name; });
  }

  // Lab authors (data-authors only holds people from _data/members.yml) with the number of
  // their projects: most projects first, then by family name.
  var authors = [];
  cards.forEach(function (card) {
    authorsOf(card).forEach(function (name) {
      var entry = authors.filter(function (a) { return a.name === name; })[0];
      if (entry) entry.count += 1; else authors.push({ name: name, count: 1 });
    });
  });
  // Alphabetical by first name, so a name is found where a reader expects it.
  authors.sort(function (a, b) { return a.name.localeCompare(b.name); });
  var authorQuery = "";   // text typed into the "Find a name" box of the author bar

  var mode = "year";      // "year" (default), "area" or "author"
  var author = "";        // selected author in author mode; "" means all authors

  // Newest publication first; projects published on the same day go by name.
  function byDate(a, b) {
    var first = a.getAttribute("data-date") || "", second = b.getAttribute("data-date") || "";
    if (first !== second) return first < second ? 1 : -1;
    return a.getAttribute("data-title").localeCompare(b.getAttribute("data-title"));
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // ----- Showing why a project matched the search -----
  // Text that is visible on the card (name label, paper title, venue, year, summary, topics) gets
  // the matching letters marked in place. Matches in text the card does not show (authors,
  // research area, project page) are listed in a box under the title:
  // author names in full, longer text as a short fragment around the match.

  function highlighted(text, terms, className) {
    var lower = text.toLowerCase();
    var marks = [];
    terms.forEach(function (term) {
      var from = lower.indexOf(term);
      while (from !== -1) {
        for (var i = from; i < from + term.length; i += 1) marks[i] = true;
        from = lower.indexOf(term, from + 1);
      }
    });
    var node = element("span", className || "");
    var start = 0;
    for (var j = 1; j <= text.length; j += 1) {
      if (j === text.length || Boolean(marks[j]) !== Boolean(marks[start])) {
        var piece = text.slice(start, j);
        node.appendChild(marks[start] ? element("mark", "", piece) : document.createTextNode(piece));
        start = j;
      }
    }
    return node;
  }

  function matches(text, terms) {
    var lower = text.toLowerCase();
    return terms.some(function (term) { return lower.indexOf(term) !== -1; });
  }

  // Up to two short pieces of `text` around the first place each term occurs.
  function fragment(text, terms) {
    var lower = text.toLowerCase();
    var windows = [];
    terms.forEach(function (term) {
      var at = lower.indexOf(term);
      if (at !== -1) windows.push([Math.max(0, at - 45), Math.min(text.length, at + term.length + 65)]);
    });
    if (!windows.length) return "";
    windows.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [windows[0]];
    windows.slice(1).forEach(function (next) {
      var last = merged[merged.length - 1];
      if (next[0] <= last[1] + 12) last[1] = Math.max(last[1], next[1]); else merged.push(next);
    });
    return merged.slice(0, 2).map(function (range) {
      // Widen to whole words so that no word is cut.
      var start = range[0] > 0 ? text.lastIndexOf(" ", range[0]) + 1 : 0;
      var space = text.indexOf(" ", range[1]);
      var end = range[1] >= text.length || space === -1 ? text.length : space;
      return (start > 0 ? "… " : "") + text.slice(start, end).trim() + (end < text.length ? " …" : "");
    }).join(" ");
  }

  function matchRow(label, content) {
    var row = element("p", "card__match-row");
    row.appendChild(element("span", "card__match-label", label));
    row.appendChild(content);
    return row;
  }

  function showMatches(card, terms) {
    // Visible text: mark in place.
    Array.prototype.forEach.call(card.querySelectorAll("[data-hl]"), function (node) {
      if (node.originalText === undefined) node.originalText = node.textContent;
      node.textContent = "";
      if (terms.length) node.appendChild(highlighted(node.originalText, terms)); else node.textContent = node.originalText;
    });

    // Text the card does not show: list it in a box under the title.
    var old = card.querySelector(".card__match");
    if (old) old.parentNode.removeChild(old);
    if (!terms.length) return;
    var box = element("div", "card__match");

    var names = (card.getAttribute("data-all-authors") || "").split("|").filter(function (name) {
      return name && matches(name, terms);
    });
    if (names.length) {
      var list = element("span", "card__match-names");
      names.forEach(function (name, index) {
        list.appendChild(highlighted(name, terms));
        if (index < names.length - 1) list.appendChild(document.createTextNode(", "));
      });
      box.appendChild(matchRow(names.length === 1 ? "Author" : "Authors", list));
    }

    var area = card.getAttribute("data-area") || "";
    if (mode !== "area" && area && matches(area, terms)) {
      box.appendChild(matchRow("Research area", highlighted(area, terms, "card__match-text")));
    }

    var pageText = card.getAttribute("data-page-text") || "";
    if (pageText && matches(pageText, terms)) {
      box.appendChild(matchRow("Project page", highlighted(fragment(pageText, terms), terms, "card__match-text")));
    }

    if (!box.childNodes.length) return;
    var title = card.querySelector(".card__title");
    title.parentNode.insertBefore(box, title.nextSibling);
  }

  function buildGroup(title, description, items, isYear) {
    var section = element("section", "group" + (isYear ? " group--year" : ""));
    var head = element("header", "group__head");
    head.appendChild(element("h2", "", title));
    if (description) head.appendChild(element("p", "group__desc", description));
    head.appendChild(element("p", "group__count", items.length + (items.length === 1 ? " project" : " projects")));
    var grid = element("div", "cards");
    items.forEach(function (card) { grid.appendChild(card); });
    section.appendChild(head);
    section.appendChild(grid);
    return section;
  }

  function buildChip(label, count, value) {
    var chip = element("button", "chip");
    chip.type = "button";
    chip.setAttribute("aria-pressed", author === value ? "true" : "false");
    chip.appendChild(element("span", "", label));
    chip.appendChild(element("span", "chip__count", String(count)));
    chip.addEventListener("click", function () {
      author = value;
      // Picking an author starts from all of their projects, so drop any search text.
      if (value && search) search.value = "";
      render();
    });
    return chip;
  }

  // ----- Overview bar: a year dial or a row of research areas -----
  var overview = document.getElementById("overview");
  var sections = [];        // [{ key, node }] for the groups now on the page, top to bottom
  var marks = [];           // overview buttons, by key
  var needle = null, dialMax = 0, dialSpan = 1;
  var STEP = 0.2;           // the needle moves in fifths of a year, one fine tick at a time

  // Height taken by the pinned header and overview bar, plus a little air.
  function stickyOffset() {
    if (!overview || overview.hidden) return 84;
    var pinnedAt = parseFloat(window.getComputedStyle(overview).top) || 60;
    return pinnedAt + overview.offsetHeight + 16;
  }

  function goTo(node) {
    var top = node.getBoundingClientRect().top + window.scrollY - stickyOffset() + 4;
    var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: top, behavior: calm ? "auto" : "smooth" });
  }

  function renderOverview() {
    if (!overview) return;
    overview.textContent = "";
    marks = []; needle = null;
    var show = (mode === "year" || mode === "area") && sections.length > 1;
    overview.hidden = !show;
    document.documentElement.classList.toggle("has-overview", show);
    if (!show) return;

    if (mode === "area") {
      overview.setAttribute("aria-label", "Research areas");
      var row = element("div", "overview__areas");
      sections.forEach(function (section) {
        var chip = element("button", "chip");
        chip.type = "button";
        chip.appendChild(element("span", "", section.key));
        chip.appendChild(element("span", "chip__count", String(section.node.querySelectorAll(".card").length)));
        chip.addEventListener("click", function () { goTo(section.node); });
        marks.push({ key: section.key, node: chip });
        row.appendChild(chip);
      });
      overview.appendChild(row);
    } else {
      overview.setAttribute("aria-label", "Years");
      var years = sections.map(function (section) { return Number(section.key); });
      dialMax = Math.max.apply(null, years);
      var dialMin = Math.min.apply(null, years);
      dialSpan = Math.max(1, dialMax - dialMin);
      var dial = element("div", "dial");
      dial.appendChild(element("div", "dial__line"));
      var place = function (node, year) { node.style.left = ((dialMax - year) / dialSpan * 100) + "%"; return node; };
      for (var year = dialMax; year >= dialMin; year -= 1) {
        var section = sections.filter(function (s) { return Number(s.key) === year; })[0];
        dial.appendChild(place(element("div", "dial__tick dial__tick--year" + (section ? "" : " dial__tick--empty")), year));
        if (year > dialMin) {
          for (var fine = 1; fine < 1 / STEP; fine += 1) dial.appendChild(place(element("div", "dial__tick"), year - fine * STEP));
        }
        var label;
        if (section) {
          label = element("button", "dial__year");
          label.type = "button";
          var total = section.node.querySelectorAll(".card").length;
          label.appendChild(document.createTextNode(String(year)));
          label.setAttribute("aria-label", year + ", " + total + (total === 1 ? " project" : " projects"));
          // The number of projects sits in a small round badge on the corner of the year
          // button, the way an unread count does, so it is not read as a month.
          label.title = total + (total === 1 ? " project" : " projects");
          label.appendChild(element("span", "dial__count", String(total)));
          label.addEventListener("click", (function (node) { return function () { goTo(node); }; })(section.node));
          marks.push({ key: String(year), node: label });
        } else {
          label = element("span", "dial__year dial__year--empty", String(year));
        }
        dial.appendChild(place(label, year));
      }
      needle = element("div", "dial__needle");
      dial.appendChild(needle);
      dial.title = "Click a year or a tick to jump there, or drag the red marker";
      makeDialInteractive(dial);
      overview.appendChild(dial);
    }
    trackScroll();
  }

  // The year a horizontal position on the dial stands for (may fall between two years).
  function dialValueAt(dial, clientX) {
    var box = dial.getBoundingClientRect();
    var share = Math.min(1, Math.max(0, (clientX - box.left) / Math.max(1, box.width)));
    return dialMax - share * dialSpan;
  }

  // Page position for a dial value: the reverse of what trackScroll() computes.
  function scrollTopFor(value) {
    var tops = sections.map(function (section) { return section.node.getBoundingClientRect().top + window.scrollY; });
    var years = sections.map(function (section) { return Number(section.key); });
    var target = tops[tops.length - 1];
    if (value >= years[0]) target = tops[0];
    for (var i = 0; i < years.length - 1; i += 1) {
      if (value <= years[i] && value > years[i + 1]) {
        target = tops[i] + (years[i] - value) / (years[i] - years[i + 1]) * (tops[i + 1] - tops[i]);
      }
    }
    return Math.max(0, target - stickyOffset() + 4);
  }

  // The whole dial is a control. A click on a tick or between ticks jumps to the nearest
  // year that has projects; pressing and dragging scrolls the page along with the marker.
  function makeDialInteractive(dial) {
    var startX = 0, pressed = false, dragging = false;
    dial.addEventListener("pointerdown", function (event) {
      if (event.target.closest && event.target.closest(".dial__year")) return;   // year buttons handle themselves
      pressed = true; dragging = false; startX = event.clientX;
      if (dial.setPointerCapture) { try { dial.setPointerCapture(event.pointerId); } catch (error) { /* not capturable */ } }
      event.preventDefault();
    });
    dial.addEventListener("pointermove", function (event) {
      if (!pressed) return;
      if (!dragging && Math.abs(event.clientX - startX) < 4) return;
      dragging = true;
      dial.classList.add("dial--dragging");
      window.scrollTo(0, scrollTopFor(dialValueAt(dial, event.clientX)));
    });
    var release = function (event) {
      if (!pressed) return;
      pressed = false;
      dial.classList.remove("dial--dragging");
      if (dragging) { dragging = false; return; }
      // A plain click: go to the nearest year that has projects.
      var value = dialValueAt(dial, event.clientX);
      var nearest = sections[0];
      sections.forEach(function (section) {
        if (Math.abs(Number(section.key) - value) < Math.abs(Number(nearest.key) - value)) nearest = section;
      });
      goTo(nearest.node);
    };
    dial.addEventListener("pointerup", release);
    dial.addEventListener("pointercancel", function () { pressed = false; dragging = false; dial.classList.remove("dial--dragging"); });
  }

  // Marks the group being read, and moves the needle along the year dial.
  function trackScroll() {
    if (!overview || overview.hidden || !sections.length) return;
    var line = stickyOffset() + 1;
    var tops = sections.map(function (section) { return section.node.getBoundingClientRect().top; });
    var index = 0;
    for (var i = 0; i < tops.length; i += 1) { if (tops[i] <= line) index = i; }
    marks.forEach(function (mark) {
      mark.node.setAttribute("aria-current", mark.key === sections[index].key ? "true" : "false");
    });
    if (!needle) return;
    var here = Number(sections[index].key), value = here;
    if (index < sections.length - 1 && tops[index] <= line) {
      var next = Number(sections[index + 1].key);
      var share = (line - tops[index]) / Math.max(1, tops[index + 1] - tops[index]);
      value = here + (next - here) * Math.min(1, Math.max(0, share));
    }
    value = Math.round(value / STEP) * STEP;            // step from tick to tick
    needle.style.left = ((dialMax - value) / dialSpan * 100) + "%";
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; trackScroll(); });
  }, { passive: true });
  window.addEventListener("resize", trackScroll);

  // Author bar: a box to find a name, then the names in alphabetical order with a
  // letter in front of each group of names that share an initial.
  function renderAuthorBar() {
    if (!authorBar) return;
    authorBar.hidden = mode !== "author";
    authorBar.textContent = "";
    if (mode !== "author") return;

    var head = element("div", "author-bar__head");
    head.appendChild(element("span", "author-bar__label", "Current and former lab members"));
    var find = element("input", "author-bar__find");
    find.type = "search"; find.id = "author-find"; find.placeholder = "Find a name"; find.autocomplete = "off";
    find.setAttribute("aria-label", "Find an author by name");
    find.value = authorQuery;
    head.appendChild(find);
    authorBar.appendChild(head);

    var list = element("div", "author-bar__list");
    var none = element("p", "author-bar__none", "No lab member with that name.");
    authorBar.appendChild(list);
    authorBar.appendChild(none);
    var shownNames = [];

    // Typing narrows the names shown; Enter picks the first one left.
    var narrow = function () {
      authorQuery = find.value;
      var words = authorQuery.trim().toLowerCase().split(/\s+/).filter(function (word) { return word; });
      list.textContent = "";
      shownNames = [];
      if (!words.length) list.appendChild(buildChip("All", cards.length, ""));
      var letter = "";
      authors.forEach(function (entry) {
        var lower = entry.name.toLowerCase();
        if (!words.every(function (word) { return lower.indexOf(word) !== -1; })) return;
        shownNames.push(entry.name);
        var chip = buildChip(entry.name, entry.count, entry.name);
        var initial = entry.name.charAt(0).toUpperCase();
        if (initial === letter) { list.appendChild(chip); return; }
        // The first name of each initial carries the letter, so the two never part at a line end.
        letter = initial;
        var pair = element("span", "author-bar__pair");
        var marker = element("span", "author-bar__letter", initial);
        marker.setAttribute("aria-hidden", "true");
        pair.appendChild(marker);
        pair.appendChild(chip);
        list.appendChild(pair);
      });
      none.hidden = shownNames.length > 0;
    };
    find.addEventListener("input", narrow);
    find.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") return;
      if (shownNames.length) { authorQuery = ""; author = shownNames[0]; if (search) search.value = ""; render(); }
    });
    narrow();
  }

  // Keep the address shareable: /open-codes/?author=Name
  function updateAddress() {
    try {
      var url = new URL(window.location.href);
      if (mode === "author" && author) url.searchParams.set("author", author); else url.searchParams.delete("author");
      window.history.replaceState(null, "", url);
    } catch (error) { /* address stays as it is */ }
  }

  function render() {
    var query = (search && search.value || "").trim().toLowerCase();
    var terms = query ? query.split(/\s+/) : [];
    var visible = cards.filter(function (card) {
      var haystack = card.getAttribute("data-search").toLowerCase();
      return terms.every(function (term) { return haystack.indexOf(term) !== -1; });
    }).sort(byDate);

    var groups = [];
    if (mode === "year") {
      var years = [];
      visible.forEach(function (card) {
        var year = card.getAttribute("data-year");
        if (years.indexOf(year) === -1) years.push(year);
      });
      years.sort(function (a, b) { return Number(b) - Number(a); });
      years.forEach(function (year) {
        var items = visible.filter(function (card) { return card.getAttribute("data-year") === year; });
        groups.push(buildGroup(year, "", items, true));
      });
    } else if (mode === "author") {
      var byAuthor = author ? visible.filter(function (card) { return authorsOf(card).indexOf(author) !== -1; }) : visible;
      if (byAuthor.length) groups.push(buildGroup(author || "All projects", "", byAuthor, false));
      visible = byAuthor;
    } else {
      var named = areas.map(function (area) { return area.name; });
      areas.forEach(function (area) {
        var items = visible.filter(function (card) { return card.getAttribute("data-area") === area.name; });
        if (items.length) groups.push(buildGroup(area.name, area.description || "", items, false));
      });
      // Projects whose area is not listed in _data/areas.yml still appear, under "Other".
      var others = visible.filter(function (card) { return named.indexOf(card.getAttribute("data-area")) === -1; });
      if (others.length) groups.push(buildGroup("Other", "", others, false));
    }

    cards.forEach(function (card) { showMatches(card, terms); });

    container.textContent = "";
    groups.forEach(function (group) { container.appendChild(group); });
    sections = groups.map(function (group) { return { key: group.querySelector("h2").textContent, node: group }; });
    renderOverview();
    if (noResults) noResults.hidden = visible.length > 0;
    renderAuthorBar();
    updateAddress();
  }

  function setMode(next) {
    mode = next;
    buttons.forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-group-by") === mode ? "true" : "false");
    });
  }

  function showAuthor(name) {
    var known = authors.some(function (entry) { return entry.name === name; });
    setMode("author");
    author = known ? name : "";
    if (search) search.value = "";
    render();
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setMode(button.getAttribute("data-group-by"));
      render();
    });
  });

  // A search always looks through all projects: typing clears a selected author,
  // so the two filters can never combine into an empty list by accident.
  function onSearch() {
    if (search.value.trim() && author) author = "";
    render();
  }
  if (search) {
    ["input", "search", "compositionend"].forEach(function (type) {
      search.addEventListener(type, onSearch);
    });
  }

  // Floating "Back to top" button: appears once the visitor has scrolled down, and
  // returns to the top of the page with the search box ready for typing.
  var toTop = document.getElementById("to-top");
  if (toTop) {
    var showToTop = function () { toTop.hidden = window.scrollY < 500; };
    window.addEventListener("scroll", showToTop, { passive: true });
    showToTop();
    toTop.addEventListener("click", function () {
      var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: calm ? "auto" : "smooth" });
      if (search) search.focus({ preventScroll: true });
    });
  }

  // First load: the groups come from the server already, so only the overview is built.
  sections = Array.prototype.map.call(container.querySelectorAll(".group"), function (group) {
    return { key: group.querySelector("h2").textContent, node: group };
  });
  renderOverview();

  // Remember the current view whenever the visitor leaves the home page.
  function saveState() {
    store(STATE_KEY, JSON.stringify({ mode: mode, author: author, query: search ? search.value : "", y: window.scrollY }));
  }
  window.addEventListener("pagehide", saveState);
  container.addEventListener("click", function (event) {
    if (event.target.closest && event.target.closest("a")) saveState();
  });

  // Author links on project pages arrive here as /open-codes/?author=Name
  var requested = "";
  try { requested = new URLSearchParams(window.location.search).get("author") || ""; } catch (error) { requested = ""; }
  if (requested) {
    forget(RESTORE_KEY);
    showAuthor(requested);
  } else if (load(RESTORE_KEY)) {
    // Came back through the floating button: restore the view the visitor left.
    forget(RESTORE_KEY);
    var saved = null;
    try { saved = JSON.parse(load(STATE_KEY) || "null"); } catch (error) { saved = null; }
    if (saved) {
      setMode(saved.mode === "area" || saved.mode === "author" ? saved.mode : "year");
      author = authors.some(function (entry) { return entry.name === saved.author; }) ? saved.author : "";
      if (search) search.value = saved.query || "";
      render();
      var top = Number(saved.y) || 0;
      window.requestAnimationFrame(function () { window.scrollTo(0, top); });
      window.addEventListener("load", function () { window.scrollTo(0, top); });
    }
  }

  window.OpenCodes = { showAuthor: showAuthor };
})();
