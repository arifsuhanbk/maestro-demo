# Maestro Demo

### This repo covers:
1. Installation (Maestro CLI, Maestro Studio)
2. Writing Tests (Step by Step writing Testcases for Beginners)
3. Running Tests (Run Testcases for Specific Device & Integrate with Testrail TestRun )

### Details:
1. Installation: [Maestro Setup](https://maestro.mobile.dev/getting-started/installing-maestro)
    1. Check Version 
        ```
        maestro --version
        ```
    2. check Maestro Studio
        ```
        maestro studio
        ```
2. Automation Test Data: Find App Package ID
    1. Ask App Developer
    2. Using ADB CLI Command | [Android Platform Tools](https://developer.android.com/tools/releases/platform-tools)
        ```
        adb shell "dumpsys activity activities | grep mResumedActivity | cut -d "{" -f2 | cut -d ' ' -f3 | cut -d "/" -f1"
        or
        adb shell ps -e |grep [app name]
        ```
3. Write Test Cases
    1. Element Locator Tool: https://maestro.mobile.dev/getting-started/maestro-studio
4. Execute Test Cases
    ```
    maestro test run.yaml (simple version)
    maestro --device [deviceID] test --format html -e APPID=[App Package ID] -e [key=value] run.yaml --debug-output report
    ```

### Materials for exploration:
1. Presentation Slides: https://docs.google.com/presentation/d/1VWPOSH234GsBMCLY0-FmqzpXU9MpngB0xnhiRvlNH0E/
2. Documentation: https://maestro.mobile.dev/
3. Blog for beginners: https://blog.mobile.dev/introducing-maestro-painless-mobile-ui-automation-bee4992d13c1
