
---

# 🕰️ Timezone Clock with Animated Hands

A web-based clock that shows time and date for any selected city/timezone, with:

* **Analog clock hands** (`long1` = hour hand, `long2` = minute hand) that rotate smoothly.
* **Digital time & date display** (updated every second).
* **Background and clock images** that change based on the hour (day/night).
* **Automatic default timezone** (Islamabad, Pakistan) with option to switch city.

---

## 🚀 Features

* Shows **live digital clock** (HH\:MM) and **date** in `weekday, dd MMM yyyy` format.
* Supports **multiple timezones** via `<select>` dropdown.
* **Analog clock hands** rotate:

  * Hour hand = moves gradually as minutes/seconds pass.
  * Minute hand = rotates every minute (with second smoothing).
* Background switches between **day/night themes**.
* Written in **vanilla HTML, CSS, JavaScript** (no external libs).

---

## 🛠️ How It Works

1. `Intl.DateTimeFormat` is used with `timeZone` to get the correct hour/minute/second.
2. Hour hand angle is calculated as:

   ```
   hourAngle = (hours12 + minutes/60 + seconds/3600) * 30
   ```

   → 30° per hour, with smooth movement.
3. Minute hand angle is calculated as:

   ```
   minuteAngle = (minutes + seconds/60) * 6
   ```

   → 6° per minute, with smooth movement.
4. The sticks (`#long1`, `#long2`) are rotated using `transform: rotate(deg)`.
5. Clock and background images are swapped based on current hour (AM/PM).

---

## 📂 Project Structure

```
.
├── index.html        # Main HTML
├── style.css         # Styling (clock, backgrounds, hands)
├── script.js         # JavaScript logic (timezones, hand rotation)
├── /images           # Clock & background images
└── README.md         # Documentation
```

---

## ⚡ Getting Started

### 1. Clone repo

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Open in browser

Just double-click `index.html` or serve with VSCode Live Server.

---

## 🎨 Customization

* Add/remove **timezones** by editing the `<select id="cit">` options in HTML.
* Replace **clock images** (`.clock` classes) inside `/images`.
* Replace **background images** (`.backs` classes) for AM/PM styling.
* Adjust CSS for stick thickness, color, or length.

---

