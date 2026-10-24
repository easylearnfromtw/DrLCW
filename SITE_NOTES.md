# DrLCW — Website v1

## Design direction
A multi-page personal website for 林哲緯 / CHE-WEI LIN.

- Song-era literary restraint, interpreted rather than imitated
- Japanese *ma* (間) and generous negative space
- Architectural editorial asymmetry
- Abstract, slowly moving morning daylight — **no literal mountain illustrations**
- Warm ivory, incense taupe, quiet moss, deep ink
- Elegant Chinese serif + Cormorant Garamond
- Accessible navigation and reduced-motion support

## Routes
| Route | Purpose |
| --- | --- |
| `/` | Home — quiet introduction and featured writing |
| `/about/` | About — presence, learning, values |
| `/insights/` | Insights — journal index with client-side category filters |
| `/insights/notes-on-observation/` | Demonstration article for reading layout |
| `/contact/` | Contact — pending verified contact details |

This is a **true static multi-page website**, not a scroll-to-section landing page or SPA.

## Local preview
Run a static file server at the project root:
```sh
python3 -m http.server 8000
```
Then open `http://localhost:8000`. Deployment to any static host supporting directory index files is possible.

## Before public launch
1. Confirm final self-description, education, projects and any claims about professional status.
2. Replace About's abstract portrait placeholder with an approved real photograph, while keeping spatial negative space.
3. Supply verified email and social profiles; no invented address is included in the current Contact page.
4. Replace the clearly labeled editorial demonstration article with approved original writings.
5. Set a canonical production URL, custom domain, analytics and Open Graph imagery.

## Notes
- The original root `README.md` remains untouched.
- No personal assets, contact details or credentials were fabricated for this initial design.
