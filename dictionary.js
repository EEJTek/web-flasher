const dictionary = {
  id: {
    pageTitle: "AKAL Plays ESP Web Flasher",

    subtitle: `
            Flash firmware ESP32-S2 dan ESP8266 langsung melalui browser.
            <br>
            Pastikan firmware yang dipilih sesuai dengan PS4 kalian.
        `,

    preparationTitle: "Persiapan:",

    preparation: `
            1. Hubungkan board melalui USB.<br>
            2. Khusus ESP32 S2 perlu masuk ke flash mode dulu dengan tekan tombol BOOT dan Reset bersamaan lalu lepas.<br>
            3. Tekan tombol Connect & Flash.<br>
            4. Pilih port serial board Anda.
        `,

    firmwareTitle: "Pilih Versi Firmware:",

    firmwareV1: "7.00 - 13.00 (GH)",
    firmwareV2: "13.02 - 13.52 (RG)",
    firmwareV3: "7.00 - 13.52 (GH)",

    webkitInfo: "Webkit: RG = RawGame, GH = GamerHack",

    connectFlash: "Connect & Flash",

    ready: "Siap. Hubungkan ESP dan mulai flashing...",

    connecting: "Connecting...",
    erasing: "Erasing...",

    flashing: "Memulai flashing firmware... Mohon jangan mencabut kabel USB.",
    doNotDisconnect: "Jangan pindah tab atau jendela agar proses flashing tidak terganggu.",

    eraseMessage: "Menghapus seluruh isi flash...",

    success: "[BERHASIL] Flashing selesai!",

    resetMessage:
      "Tekan tombol Reset pada ESP, hubungkan PS4 ke wifi Webkit PS4 (pass: 12345678). lalu buka 10.1.1.1 di browser atau menu User Guide untuk menggunakan WebKit.",

    settingMessage:
      "Buka 10.1.1.1/setting untuk mengganti nama dan password WiFi, memperbarui GoldHEN, serta mengubah background.",

    registrationMessage:
      "Untuk registrasi awal kirimkan ID Chip yang tampil di halaman regis atau di bawah ke https://t.me/yayatpy",

    selectFirmwareError: "Pilih versi firmware dulu!",

    browserError:
      "[ERROR] Browser tidak mendukung Web Serial API!\n" +
      "Gunakan Google Chrome atau Microsoft Edge di komputer.",

    unsupportedChip:
      "Chip tidak didukung. Hanya ESP8266 dan ESP32-S2 yang didukung.\n" +
      "Chip terdeteksi: ",

    firmwareNotFound: "Firmware tidak ditemukan: ",

    firmwareEmpty: "File firmware kosong.",

    firmwareVersionError: "Versi firmware tidak tersedia untuk chip ini.",

    detectedChip: "Chip terdeteksi: ",

    selectedFirmware: "Firmware yang dipilih: ",

    errorText: "Error",
    chipIdLabel: "Chip ID: ",

    chipIdError: "[ERROR] Gagal membaca Chip ID: ",

    logReady: "Siap. Hubungkan ESP dan mulai flashing... ",

    footer: "© 2026 - AKAL Plays ESP Web Flasher",

    languageButton: "English: EN",
  },

  en: {
    pageTitle: "AKAL Plays ESP Web Flasher",

    subtitle: `
            Flash ESP32-S2 and ESP8266 firmware directly through your browser.
            <br>
            Make sure the selected firmware is compatible with your PS4.
        `,

    preparationTitle: "Preparation:",

    preparation: `
            1. Connect the board via USB.<br>
            2. For ESP32 S2, enter flash mode first by pressing the BOOT and Reset buttons together, then release them.<br>
            3. Click Connect & Flash.<br>
            4. Select your board's serial port.
        `,

    firmwareTitle: "Select Firmware Version:",

    firmwareV1: "7.00 - 13.00 (GH)",
    firmwareV2: "13.02 - 13.52 (RG)",
    firmwareV3: "7.00 - 13.52 (GH)",

    webkitInfo: "Webkit: RG = RawGame, GH = GamerHack",

    connectFlash: "Connect & Flash",

    ready: "Ready. Connect your ESP and start flashing...",

    connecting: "Connecting...",
    erasing: "Erasing...",

    flashing: "Flashing firmware..., Please do not disconnect the USB cable.",
    doNotDisconnect: "Keep this window visible — switching to another tab or window can interrupt the flash.",

    eraseMessage: "Erasing the entire flash...",

    success: "[SUCCESS] Flashing completed!",

    resetMessage:
      "Press the Reset button on the ESP, connect your PS4 to Webkit PS4 (pass: 12345678), then open 10.1.1.1 in the browser or use the User Guide menu to access WebKit.",

    settingMessage:
      "Go to 10.1.1.1/setting to change the WiFi name and password, update GoldHEN, and change the background.",

    registrationMessage:
      "For initial registration, send the Chip ID shown on the registration page or below to https://t.me/yayatpy",

    selectFirmwareError: "Please select a firmware version first!",

    browserError:
      "[ERROR] Your browser does not support the Web Serial API!\n" +
      "Please use Google Chrome or Microsoft Edge on a computer.",

    unsupportedChip:
      "Unsupported chip. Only ESP8266 and ESP32-S2 are supported.\n" +
      "Detected chip: ",

    firmwareNotFound: "Firmware not found: ",

    firmwareEmpty: "Firmware file is empty.",

    firmwareVersionError:
      "This firmware version is not available for this chip.",

    detectedChip: "Detected chip: ",

    selectedFirmware: "Selected firmware: ",

    errorText: "Error",
    chipIdLabel: "Chip ID: ",

    chipIdError: "[ERROR] Failed to read Chip ID: ",

    logReady: "Ready. Connect the ESP and start flashing... ",

    footer: "© 2026 - AKAL Plays ESP Web Flasher",

    languageButton: "中文：ZH",
  },
  
  zh: {
    pageTitle: "AKAL Plays ESP 网页刷写工具",

    subtitle: `
            通过浏览器直接刷写 ESP32-S2 和 ESP8266 固件。
            <br>
            请确保所选固件与您的 PS4 兼容。
        `,

    preparationTitle: "准备工作：",

    preparation: `
            1. 通过 USB 连接开发板。<br>
            2. 对于 ESP32-S2，请先进入刷写模式：同时按下 BOOT 和 Reset 按钮，然后松开。<br>
            3. 点击“连接并刷写”。<br>
            4. 选择开发板对应的串口。
        `,

    firmwareTitle: "选择固件版本：",

    firmwareV1: "7.00 - 13.00 (GH)",
    firmwareV2: "13.02 - 13.52 (RG)",
    firmwareV3: "7.00 - 13.52 (GH)",

    webkitInfo: "WebKit：RG = RawGame，GH = GamerHack",

    connectFlash: "连接并刷写",

    ready: "准备就绪。请连接 ESP 并开始刷写……",

    connecting: "正在连接……",
    erasing: "正在擦除……",

    flashing: "正在刷写固件……请勿断开 USB 数据线。",
    doNotDisconnect: "请保持此窗口处于前台，切换到其他标签页或窗口可能会中断刷写。",

    eraseMessage: "正在擦除整个闪存……",

    success: "[成功] 固件刷写完成！",

    resetMessage:
      "请按下 ESP 上的 Reset 按钮，然后将 PS4 连接到 Webkit PS4（密码：12345678），接着在浏览器中打开 10.1.1.1，或通过“用户指南”菜单访问 WebKit。",

    settingMessage:
      "访问 10.1.1.1/setting，即可修改 Wi-Fi 名称和密码、更新 GoldHEN 以及更换背景。",

    registrationMessage:
      "首次注册时，请将注册页面上或下方显示的 Chip ID（芯片 ID）发送至 https://t.me/yayatpy",

    selectFirmwareError: "请先选择一个固件版本！",

    browserError:
      "[错误] 您的浏览器不支持 Web Serial API！\n" +
      "请在电脑上使用 Google Chrome 或 Microsoft Edge 浏览器。",

    unsupportedChip:
      "不支持的芯片。仅支持 ESP8266 和 ESP32-S2。\n" +
      "检测到的芯片：",

    firmwareNotFound: "未找到固件：",

    firmwareEmpty: "固件文件为空。",

    firmwareVersionError:
      "此芯片不支持所选的固件版本。",

    detectedChip: "检测到的芯片：",

    selectedFirmware: "已选择的固件：",

    errorText: "错误",
    chipIdLabel: "芯片 ID：",

    chipIdError: "[错误] 读取芯片 ID 失败：",

    logReady: "准备就绪。请连接 ESP 并开始刷写…… ",

    footer: "© 2026 - AKAL Plays ESP 网页刷写工具",

    languageButton: "Indonesia: ID",
  },
};

export default dictionary;
