# HCCEPose website

Static homepage and bilingual HCCEPose documentation. Preview with:

```bash
python -m http.server 8769 --directory .
```

Open `http://127.0.0.1:8769/index.html?lang=zh` or `http://127.0.0.1:8769/index.html?lang=en`. Documentation starts at `http://127.0.0.1:8769/docs/index.html`.

The interactive 3D viewer loads saved triangular-part RGB-D images, measured depth points and CAD poses for inspection. It does not run inference in the browser.

[PUBLIC_SOURCES.md](PUBLIC_SOURCES.md) records this website’s media and library sources. See [LICENSE](LICENSE) for the project license.
