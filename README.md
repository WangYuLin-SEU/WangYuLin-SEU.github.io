# Project websites

Project documentation and demonstrations by Yulin Wang.

- [All projects](https://wangyulin-seu.github.io/)
- [WAPR](https://wangyulin-seu.github.io/wapr/) · [Source code](https://github.com/WangYuLin-SEU/WAPR)
- [HCCEPose](https://wangyulin-seu.github.io/hccepose/) · [Documentation](https://wangyulin-seu.github.io/hccepose/docs/index.html) · [Source code](https://github.com/WangYuLin-SEU/HCCEPose)

## Layout

```text
pages/
  index.html    Project directory
  wapr/         WAPR website, documentation and demonstrations
  hccepose/     HCCEPose website, documentation and demonstrations
```

Preview the complete site from the repository root:

```bash
python -m http.server 8768 --directory pages
```

Open `http://127.0.0.1:8768/`. Project files stay within their own directories. The Pages workflow publishes the complete `pages/` directory on updates to `main`.

Each project retains its own credits, asset sources and third-party notices. WAPR notices are available in `pages/wapr/AUTHORS.md` and `pages/wapr/THIRD_PARTY_NOTICES.txt`; HCCEPose sources and notices are available in `pages/hccepose/PUBLIC_SOURCES.md` and `pages/hccepose/LICENSE`. See `LICENSE` for the repository license.
