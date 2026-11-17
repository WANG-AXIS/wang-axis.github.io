# Open Codes

The project showcase at <https://wang-axis.github.io/open-codes/>. It is part of the lab
website and is rebuilt by GitHub Pages together with it: commit to `master` and the page
updates in about a minute.

## Where things are

```
_open_codes/                 one Markdown file per project
_data/open_codes/areas.yml   research areas (order and descriptions)
_data/open_codes/members.yml current and former lab members (Author view)
_data/open_codes/status.yml  labels of the code status values
_layouts/oc_default.html     page shell
_layouts/oc_project.html     project page
_includes/open-codes/        header, footer, project card
open-codes/index.html        home page
open-codes/assets/           styles, script and figures
_config.yml                  the "Open Codes" block at the end declares the collection
```

The link in the "Open Codes" box of the lab home page comes from `_data/labcodes.yml`.

## Add a project

1. Copy an existing file in `_open_codes/` (for example `noise2sim.md`) and rename it.
   The file name becomes the address: `_open_codes/my-method.md` is published at `/open-codes/my-method/`.
2. Put the method figure in `open-codes/assets/img/projects/` (PNG or JPG, landscape, about 1500 px wide).
3. Fill in the fields at the top of the file, then write the abstract below the second `---` line.
4. Commit.

### Fields

| Field | Required | Meaning |
| --- | --- | --- |
| `title` | yes | Short name, normally the GitHub repository name. Shown as a label on the card's figure and as the heading of the project page |
| `full_title` | no | Full paper title. Shown as the heading of the card |
| `summary` | yes | One or two sentences shown on the card |
| `area` | yes | Research area. Must match a `name` in `_data/open_codes/areas.yml` |
| `year` | yes | Publication year: decides the group in the "Year" view |
| `date` | yes | Publication date as `YYYY-MM-DD`: decides the order, newest first. Use the first day of the month when only the month is known |
| `venue` | yes | Journal or conference name. Use `arXiv preprint` if not published yet |
| `venue_detail` | no | Volume, pages and year, e.g. `42(6), 1590–1602 (2023)` |
| `authors` | no | All authors of the paper, one name per line |
| `thumbnail` | no | File name of the method figure in `open-codes/assets/img/projects/` |
| `figure_caption` | no | Caption shown under the figure on the project page |
| `code` | no | URL of the GitHub repository |
| `code_status` | yes | `released`, `partial` or `planned` |
| `code_scope` | no | What the repository contains, in a few words |
| `license` | no | Code license |
| `framework` | no | e.g. `PyTorch` |
| `paper` | no | Link to the published paper (DOI link preferred) |
| `arxiv` | no | Link to the preprint. Fill this in only when there is no published version yet |
| `links` | no | Extra resources, each with a `label` and a `url` |
| `tags` | no | Up to three or four short topic labels |
| `bibtex` | no | BibTeX entry, shown with a copy button |

Text that contains a colon should be wrapped in quotes, as in the existing files.

Each project page shows a single **Paper** button. It opens `paper` when that field is set
and falls back to `arxiv` otherwise.

### Authors and lab members

List every author of the paper under `authors`. People listed in `_data/open_codes/members.yml`
are treated as current or former lab members: they get a button in the Author view, and
their names on project pages are marked and link to all of their projects. When a project
brings in a new lab member, add one line to that file. If a paper spells a member's name
differently, add that spelling under `aliases` in the same file.

### Research areas

`_data/open_codes/areas.yml` lists the research areas in the order they appear in the
"Research area" view. An area without projects is hidden. A project whose `area` is not
in the list appears under "Other".
