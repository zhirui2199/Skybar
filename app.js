const translations = {
  en: {
    navRegister: "Register",
    navMember: "Member Portal",
    navEvents: "Events",
    navBenefits: "Benefits",
    navAdmin: "Staff Dashboard",
    heroTitle: "Skybar Membership Experience",
    heroSubtitle: "Join the skyline community, earn points, redeem exclusive perks, and stay updated on every rooftop event.",
    heroCta: "Start Membership",
    registerTitle: "Member Registration",
    registerSubtitle: "Membership is stored securely in your browser and can be accessed any time.",
    labelName: "Username",
    labelPhone: "Mobile phone number",
    labelPassword: "Password",
    labelTier: "Preferred tier",
    tierStandard: "City Lights",
    tierPremium: "Starlight Lounge",
    tierElite: "Aurora Table",
    registerButton: "Create account",
    registerSuccess: "Registration successful. Your account is ready.",
    registerUpdate: "Account updated successfully.",
    registerError: "Please complete all fields. Phone number must be at least 8 digits.",
    memberTitle: "Member Portal",
    memberSubtitle: "Log in to view your points, reservations, and privileges.",
    loginButton: "Sign in",
    loginError: "We could not find that account. Please try again.",
    pointsLabel: "Reward points",
    tierLabel: "Membership tier",
    visitsLabel: "Visits this month",
    nextEventLabel: "Next event",
    redeemTitle: "Points Redemption",
    redeemSubtitle: "Swap points for curated skyline perks.",
    redeemButton: "Redeem",
    redeemSuccess: "Redemption confirmed! Enjoy your perk.",
    redeemError: "Not enough points for this perk.",
    eventsTitle: "Upcoming Events",
    eventsSubtitle: "Plan your nights with live DJ sets, cocktail labs, and sunset yoga.",
    benefitsTitle: "More Skybar Features",
    benefitsSubtitle: "Explore extra functions crafted for members.",
    featureOneTitle: "Smart reservation",
    featureOneText: "Book skyline seats with real-time availability and table preferences.",
    featureTwoTitle: "Private mixology notes",
    featureTwoText: "Save your favorite cocktails and request them instantly.",
    featureThreeTitle: "VIP check-in",
    featureThreeText: "Use QR check-in for fast entry on event nights.",
    adminTitle: "Staff Dashboard",
    adminSubtitle: "View member profiles stored on this device.",
    adminEmpty: "No members registered yet.",
    storageWarningTitle: "Preview notice",
    storageWarningText: "For full previews, open this site through a local web server so member data can be saved.",
    footerText: "Skybar membership experience · Designed for mobile, tablet, and desktop.",
    phonePlaceholder: "e.g. 13800001234",
    passwordPlaceholder: "At least 6 characters",
    namePlaceholder: "Your nickname"
  },
  zh: {
    navRegister: "会员注册",
    navMember: "会员中心",
    navEvents: "活动日历",
    navBenefits: "特色功能",
    navAdmin: "后台管理",
    heroTitle: "Skybar 会员体验",
    heroSubtitle: "加入高空社区，累积积分、兑换专属礼遇，并随时掌握屋顶活动动态。",
    heroCta: "立即加入",
    registerTitle: "会员注册",
    registerSubtitle: "会员信息将保存在本地浏览器，注册后可随时查看。",
    labelName: "用户名",
    labelPhone: "手机号码",
    labelPassword: "密码",
    labelTier: "偏好等级",
    tierStandard: "城市之光",
    tierPremium: "星辰会馆",
    tierElite: "极光专席",
    registerButton: "创建账号",
    registerSuccess: "注册成功，账号已保存。",
    registerUpdate: "账号信息已更新。",
    registerError: "请填写完整信息，手机号至少 8 位。",
    memberTitle: "会员中心",
    memberSubtitle: "登录查看积分、预约与专属礼遇。",
    loginButton: "登录",
    loginError: "未找到该账号，请重试。",
    pointsLabel: "积分余额",
    tierLabel: "会员等级",
    visitsLabel: "本月到访",
    nextEventLabel: "下一场活动",
    redeemTitle: "积分兑换",
    redeemSubtitle: "使用积分兑换精选礼遇。",
    redeemButton: "立即兑换",
    redeemSuccess: "兑换成功，已为你锁定礼遇！",
    redeemError: "积分不足，无法兑换。",
    eventsTitle: "活动预告",
    eventsSubtitle: "现场 DJ、调酒课堂、日落瑜伽等精彩活动，提前锁定。",
    benefitsTitle: "更多 Skybar 功能",
    benefitsSubtitle: "探索专为会员设计的附加服务。",
    featureOneTitle: "智能预约",
    featureOneText: "实时查看座位，预选观景位置与偏好。",
    featureTwoTitle: "私人酒单笔记",
    featureTwoText: "收藏喜欢的鸡尾酒，下次快速点单。",
    featureThreeTitle: "VIP 快速入场",
    featureThreeText: "扫码签到，活动夜快速通行。",
    adminTitle: "后台管理",
    adminSubtitle: "查看本设备已注册的会员。",
    adminEmpty: "暂无会员资料。",
    storageWarningTitle: "预览提示",
    storageWarningText: "请通过本地服务器预览网站，以确保会员数据可以正常保存。",
    footerText: "Skybar 会员体验 · 适配手机、平板与桌面浏览。",
    phonePlaceholder: "例如 13800001234",
    passwordPlaceholder: "至少 6 位字符",
    namePlaceholder: "你的昵称"
  }
};

const perks = [
  { id: "perk1", cost: 200, label: { en: "Signature cocktail flight", zh: "招牌鸡尾酒品鉴" } },
  { id: "perk2", cost: 350, label: { en: "Sunset lounge seat", zh: "日落观景座位" } },
  { id: "perk3", cost: 500, label: { en: "Chef tasting bites", zh: "主厨小食套餐" } }
];

const events = [
  {
    date: "Fri · 20:00",
    title: { en: "Neon Skyline DJ", zh: "霓虹天际 DJ 夜" },
    desc: { en: "Live house beats and LED visuals.", zh: "现场 House 音乐与灯光秀。" }
  },
  {
    date: "Sat · 18:30",
    title: { en: "Golden Hour Mixology", zh: "金色时刻调酒课堂" },
    desc: { en: "Hands-on cocktail workshop.", zh: "互动式鸡尾酒体验。" }
  },
  {
    date: "Sun · 17:00",
    title: { en: "Skyline Yoga", zh: "天际线瑜伽" },
    desc: { en: "Stretch with a panoramic view.", zh: "在全景视野中放松身心。" }
  }
];

const languageToggle = document.querySelector("[data-lang-toggle]");
const languageLabel = document.querySelector("[data-lang-label]");
const storageWarning = document.querySelector("[data-storage-warning]");

const storage = (() => {
  try {
    const testKey = "__skybar_test__";
    localStorage.setItem(testKey, "1");
    localStorage.removeItem(testKey);
    return {
      available: true,
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value)
    };
  } catch (error) {
    const memoryStore = {};
    return {
      available: false,
      getItem: (key) => (key in memoryStore ? memoryStore[key] : null),
      setItem: (key, value) => {
        memoryStore[key] = value;
      }
    };
  }
})();
let currentLang = storage.getItem("skybar_lang") || (navigator.language.startsWith("zh") ? "zh" : "en");

const applyTranslations = (lang) => {
  currentLang = lang;
  storage.setItem("skybar_lang", lang);
  const strings = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (strings[key]) {
      el.setAttribute("placeholder", strings[key]);
    }
  });

  if (languageLabel) {
    languageLabel.textContent = lang === "zh" ? "EN" : "中文";
  }

  if (storageWarning) {
    storageWarning.dataset.visible = storage.available ? "false" : "true";
  }

  renderEvents();
  renderPerks();
};

const getMembers = () => {
  const raw = storage.getItem("skybar_members");
  return raw ? JSON.parse(raw) : [];
};

const saveMembers = (members) => {
  storage.setItem("skybar_members", JSON.stringify(members));
};

const registerForm = document.querySelector("[data-register-form]");
const registerStatus = document.querySelector("[data-register-status]");

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(registerForm);
    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const password = formData.get("password").trim();
    const tier = formData.get("tier");

    if (!name || !phone || phone.length < 8 || !password || password.length < 6) {
      registerStatus.textContent = translations[currentLang].registerError;
      registerStatus.classList.add("error");
      return;
    }

    const members = getMembers();
    const existing = members.find((member) => member.phone === phone);
    if (existing) {
      existing.name = name;
      existing.password = password;
      existing.tier = tier;
      registerStatus.textContent = translations[currentLang].registerUpdate;
    } else {
      const newMember = {
        id: `MBR-${Date.now()}`,
        name,
        phone,
        password,
        tier,
        points: 420,
        visits: 3,
        nextEventIndex: 0
      };
      members.push(newMember);
      registerStatus.textContent = translations[currentLang].registerSuccess;
    }
    saveMembers(members);
    registerStatus.classList.remove("error");
    registerForm.reset();
  });
}

const loginForm = document.querySelector("[data-login-form]");
const loginStatus = document.querySelector("[data-login-status]");
const memberPanel = document.querySelector("[data-member-panel]");
let activeMemberId = null;

const updateMemberPanel = (member) => {
  if (!memberPanel) return;
  memberPanel.querySelector("[data-member-name]").textContent = member.name;
  memberPanel.querySelector("[data-member-points]").textContent = member.points;
  memberPanel.querySelector("[data-member-tier]").textContent = translations[currentLang][member.tier] || member.tier;
  memberPanel.querySelector("[data-member-visits]").textContent = member.visits;
  const eventLabel =
    events[member.nextEventIndex]?.title[currentLang] || member.nextEvent || "-";
  memberPanel.querySelector("[data-member-event]").textContent = eventLabel;
  memberPanel.dataset.visible = "true";
};

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const phone = formData.get("phone").trim();
    const password = formData.get("password").trim();
    const members = getMembers();
    const member = members.find((item) => item.phone === phone && item.password === password);

    if (!member) {
      loginStatus.textContent = translations[currentLang].loginError;
      loginStatus.classList.add("error");
      return;
    }

    loginStatus.textContent = "";
    loginStatus.classList.remove("error");
    activeMemberId = member.id;
    updateMemberPanel(member);
    loginForm.reset();
  });
}

const perksContainer = document.querySelector("[data-perks]");
const redeemStatus = document.querySelector("[data-redeem-status]");

const renderPerks = () => {
  if (!perksContainer) return;
  perksContainer.innerHTML = "";
  perks.forEach((perk) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h4>${perk.label[currentLang]}</h4>
      <p>${perk.cost} pts</p>
      <button class="primary" data-perk-id="${perk.id}">${translations[currentLang].redeemButton}</button>
    `;
    perksContainer.appendChild(card);
  });
};

if (perksContainer) {
  perksContainer.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-perk-id]");
    if (!button) return;
    const perkId = button.dataset.perkId;
    const perk = perks.find((item) => item.id === perkId);
    const members = getMembers();
    const member = members.find((item) => item.id === activeMemberId);

    if (!member || member.points < perk.cost) {
      redeemStatus.textContent = translations[currentLang].redeemError;
      redeemStatus.classList.add("error");
      return;
    }

    member.points -= perk.cost;
    saveMembers(members);
    redeemStatus.textContent = translations[currentLang].redeemSuccess;
    redeemStatus.classList.remove("error");
    updateMemberPanel(member);
  });
}

const eventsContainer = document.querySelector("[data-events]");

const renderEvents = () => {
  if (!eventsContainer) return;
  eventsContainer.innerHTML = "";
  events.forEach((eventItem) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class="badge">${eventItem.date}</span>
      <h3>${eventItem.title[currentLang]}</h3>
      <p>${eventItem.desc[currentLang]}</p>
    `;
    eventsContainer.appendChild(card);
  });
};

const adminTableBody = document.querySelector("[data-admin-table]");
const adminEmpty = document.querySelector("[data-admin-empty]");

const renderAdmin = () => {
  if (!adminTableBody) return;
  const members = getMembers();
  adminTableBody.innerHTML = "";
  if (members.length === 0) {
    adminEmpty.style.display = "block";
    return;
  }
  adminEmpty.style.display = "none";
  members.forEach((member) => {
    const row = document.createElement("tr");
    const tierLabel = translations[currentLang][member.tier] || member.tier;
    row.innerHTML = `
      <td>${member.id}</td>
      <td>${member.name}</td>
      <td>${member.phone}</td>
      <td>${tierLabel}</td>
      <td>${member.points}</td>
      <td>${member.visits}</td>
    `;
    adminTableBody.appendChild(row);
  });
};

if (adminTableBody) {
  renderAdmin();
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLang = currentLang === "en" ? "zh" : "en";
    applyTranslations(nextLang);
    renderAdmin();
  });
}

applyTranslations(currentLang);
