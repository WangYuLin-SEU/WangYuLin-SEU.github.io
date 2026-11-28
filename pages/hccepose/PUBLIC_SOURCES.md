# Public sources

The paths below refer to files in this static website.

- **Paper, preparation, label, RGB/MegaPose and historical BOP figures:** these figures in `assets/docs/assets/figures/` are from [HCCEPose revision f75cc4d5db2fc298fc7b853f8c75273757872382](https://github.com/WangYuLin-SEU/HCCEPose/tree/f75cc4d5db2fc298fc7b853f8c75273757872382).
- **Videos:** the four MP4 previews and posters in `assets/media/` are converted from that revision’s `show_vis/VID_20251009_141247{,_vis}.gif` and `VID_20251009_141731{,_vis}.gif`. Complete frames and aspect ratios are preserved.
- **Brand artwork:** `assets/docs/assets/hccepose-contours.svg` uses vector paths and gradients. The animated wordmark is presentation artwork.
- **RGB-D viewer and example outputs:** `assets/docs/assets/wapr-viewer/`, `assets/docs/assets/wapr-wbps-filtered-bin-picking.jpg`, and `assets/docs/assets/wapr-region-crops/` contain the triangular-part demonstration and its saved pose/score visualizations. The input frame and calibration are based on `test_imgs_RGBD/000003_*` in the HCCEPose revision above; the object mesh corresponds to the public [Bin-Picking model](https://huggingface.co/datasets/SEU-WYL/HccePose/tree/4e482e540314622981ccd4fce5beddac7f9d3e1d/demo-bin-picking/models). Browser code displays saved outputs rather than running inference. [Three.js r160, OrbitControls and TransformControls](https://github.com/mrdoob/three.js/tree/r160) use the MIT license; their notices are included in the viewer directory.
- **Quickstart result:** `assets/docs/assets/figures/quickstart-rgb-result.png` pairs public frame `000003` with 3D bounding boxes projected from HccePose RGB + PnP predictions, using the public Bin-Picking weights from the Hugging Face revision linked above.
- **WAPR documentation:** the interface description follows [revision 4e591be318a828c91980c58ef8bbdc34e6599881](https://github.com/WangYuLin-SEU/WAPR/blob/4e591be318a828c91980c58ef8bbdc34e6599881/wapr/estimator.py).

See [LICENSE](LICENSE) for the project license. Third-party components retain their own licenses and author notices.

- **Score filtering and NMS:** the HCCEPose Tester uses the fixed public [WAPR suppression module](https://github.com/WangYuLin-SEU/WAPR/blob/4e591be318a828c91980c58ef8bbdc34e6599881/wapr/suppression.py). The [RGB-D example](https://github.com/WangYuLin-SEU/HCCEPose/blob/main/s4_p3_test_mi10_bin_picking_RGBD_wapr.py) runs inference and postprocessing together; the implementation is in [HccePose/tester.py](https://github.com/WangYuLin-SEU/HCCEPose/blob/main/HccePose/tester.py).
