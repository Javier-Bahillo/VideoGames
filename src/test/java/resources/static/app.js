// Dynamic API base
const API = window.location.origin === "file://" ? "http://localhost:8080" : window.location.origin

// i18n translations
const T = {
  es: {
    navCatalog:'Catálogo', navContact:'Contacto', navLogin:'Entrar',
    navMyAccount:'Mi cuenta', navAdmin:'Panel Admin', navLogout:'Cerrar sesión',
    heroTitleHtml:'Tu <span>videoclub</span> digital',
    heroSubHtml:'Descubre, reserva y disfruta los mejores títulos.<br>Siempre disponible, sin desplazamientos.',
    heroBtn:'Explorar catálogo →',
    statTitles:'Títulos', statFrom:'Desde', statRental:'Por alquiler',
    tabLogin:'Iniciar sesión', tabRegister:'Registrarse',
    phUsername:'Usuario', phPassword:'Contraseña', btnEnter:'Entrar',
    phName:'Nombre *', phSurname:'Apellidos *', phEmail:'Email *',
    phUser:'Usuario *', phPass:'Contraseña * (mín. 6 caracteres)',
    formRequired:'* Todos los campos son obligatorios',
    btnCreateAccount:'Crear cuenta',
    catalogTitle:'Catálogo de juegos', phSearchGame:'Buscar juego',
    tabActiveRentals:'Alquileres activos', tabHistory:'Historial',
    adminTitle:'Panel administrador',
    adminTabGames:'Juegos', adminTabRentals:'Alquileres', adminTabUsers:'Usuarios',
    adminCreateGame:'Crear juego',
    phTitle:'Título', phPlatform:'Plataforma', phGenre:'Género',
    phProducer:'Productora', phPegi:'PEGI (ej: 18)',
    phPrice:'Precio alquiler (ej: 3.99)', phCover:'URL de portada',
    phDesc:'Descripción', phCopies:'Nº de copias',
    btnCreateGame:'Crear juego', adminGamesList:'Lista de juegos',
    gdbTitle:'Buscar en TheGamesDB', phGdbSearch:'Buscar juego en TheGamesDB...',
    btnSearch:'Buscar', descLangLabel:'Traducir descripción a:',
    adminRentalsTitle:'Todos los alquileres',
    adminCreateUser:'Crear usuario',
    phNewName:'Nombre', phNewSurname:'Apellidos', phNewEmail:'Email',
    phNewUsername:'Usuario', phNewPassword:'Contraseña',
    optionUser:'Usuario', optionAdmin:'Administrador',
    btnCreateUser:'Crear usuario', adminUsersList:'Usuarios registrados',
    contactTitle:'Contacta con nosotros',
    contactSub:'¿Tienes alguna duda, sugerencia o incidencia? Escríbenos y te responderemos lo antes posible.',
    labelName:'Nombre', labelMessage:'Mensaje',
    phContactName:'Tu nombre', phContactMsg:'Escribe tu mensaje aquí...',
    btnContactSend:'Enviar mensaje',
    modalEditTitle:'Editar juego', btnCancel:'Cancelar', btnSave:'Guardar cambios',
    cookieTitle:'Usamos cookies',
    cookieText:'Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas todas o personalizar cuáles permites.',
    btnRejectAll:'Rechazar todo', btnCustomize:'Personalizar', btnAcceptAll:'Aceptar todo',
    cookiePrefsTitle:'Preferencias de cookies',
    cookieNecessary:'Necesarias', cookieNecessaryDesc:'Imprescindibles para el funcionamiento de la web. No se pueden desactivar.',
    cookieAnalytics:'Analíticas', cookieAnalyticsDesc:'Nos ayudan a entender cómo usas la web para mejorarla.',
    cookieMarketing:'Marketing', cookieMarketingDesc:'Permiten mostrarte contenido y anuncios personalizados.',
    btnBack:'Volver', btnSavePrefs:'Guardar preferencias',
    footerBrandHtml:'🎮 Videoclub · Desarrollado por <strong>Bilbo</strong>',
    currency:'€', heroDays:'7 días',
    // Dinamico
    loading:'Cargando...',
    btnRent:'Alquilar', btnReturn:'Devolver', btnNoStock:'Sin stock',
    btnEdit:'Editar', btnAddCopy:'+ Copia', btnRemoveCopy:'− Copia',
    btnDeactivate:'Desactivar', btnReactivate:'Reactivar', btnDelete:'Eliminar',
    btnDeactivateAccount:'Darse de baja',
    labelFrom:'Desde:', labelUntil:'Hasta:', labelReturnedAt:'Devuelto:',
    labelLateFee:'Recargo:', labelMemberSince:'Miembro desde',
    labelProducer:'Productora:', labelRelease:'Lanzamiento:',
    labelNoDesc:'Sin descripción.', labelPerRental:'/ alquiler',
    labelUser:'Usuario:', titleAddCopy:'Añadir 1 copia', titleRemoveCopy:'Eliminar 1 copia disponible',
    badgeActive:'Activo', badgeInactive:'Inactivo', badgeReturned:'Devuelto', badgeOverdue:'Vencido',
    labelProjectedFee:'Recargo acumulado:',
    btnPrev:'← Anterior', btnNext:'Siguiente →', labelPage:'Página',
    copiesOne:'¡Solo queda 1 copia!', copiesNone:'Sin copias disponibles', copiesAvail:'copias disponibles',
    copySingular:'copia', copyPlural:'copias', availSingular:'disponible', availPlural:'disponibles',
    detailNoStock:'Sin stock',
    emptyGames:'No hay juegos en el catálogo.', emptyRentals:'No hay alquileres.',
    emptyUsers:'No hay usuarios registrados.', emptyActiveRentals:'No tienes alquileres activos.',
    emptyHistory:'Sin historial de alquileres.',
    gdbSearching:'Buscando...', gdbFillForm:'Rellenar form', gdbImport:'Importar',
    gdbNoResults:'Sin resultados para', gdbError:'Error al conectar con TheGamesDB.',
    translatingEs:'🇪🇸 Traduciendo...', translatingJa:'🇯🇵 Traduciendo...', translatingElv:'🧝 Traduciendo al Élfico...',
    deactivateConfirm:'¿Seguro que quieres darte de baja? Tu cuenta quedará desactivada.',
    deactivateSuccess:'Tu cuenta ha sido desactivada. Hasta pronto.',
  },
  ja: {
    navCatalog:'カタログ', navContact:'お問い合わせ', navLogin:'ログイン',
    navMyAccount:'マイアカウント', navAdmin:'管理パネル', navLogout:'ログアウト',
    heroTitleHtml:'あなたの<span>デジタル</span>ビデオクラブ',
    heroSubHtml:'ゲームを発見し、予約して、お楽しみください。<br>いつでも利用可能、移動不要。',
    heroBtn:'カタログを見る →',
    statTitles:'タイトル', statFrom:'〜から', statRental:'レンタルごと',
    tabLogin:'ログイン', tabRegister:'登録',
    phUsername:'ユーザー名', phPassword:'パスワード', btnEnter:'ログイン',
    phName:'お名前 *', phSurname:'苗字 *', phEmail:'メールアドレス *',
    phUser:'ユーザー名 *', phPass:'パスワード * (最低6文字)',
    formRequired:'* 全ての項目は必須です',
    btnCreateAccount:'アカウント作成',
    catalogTitle:'ゲームカタログ', phSearchGame:'ゲームを検索...',
    tabActiveRentals:'アクティブレンタル', tabHistory:'履歴',
    adminTitle:'管理パネル',
    adminTabGames:'ゲーム', adminTabRentals:'レンタル', adminTabUsers:'ユーザー',
    adminCreateGame:'ゲームを作成',
    phTitle:'タイトル', phPlatform:'プラットフォーム', phGenre:'ジャンル',
    phProducer:'制作会社', phPegi:'PEGI (例: 18)',
    phPrice:'レンタル料金 (例: 3.99)', phCover:'カバー画像URL',
    phDesc:'説明', phCopies:'コピー数',
    btnCreateGame:'ゲームを作成', adminGamesList:'ゲーム一覧',
    gdbTitle:'TheGamesDBで検索', phGdbSearch:'TheGamesDBでゲームを検索...',
    btnSearch:'検索', descLangLabel:'説明を翻訳:',
    adminRentalsTitle:'全レンタル',
    adminCreateUser:'ユーザーを作成',
    phNewName:'お名前', phNewSurname:'苗字', phNewEmail:'メールアドレス',
    phNewUsername:'ユーザー名', phNewPassword:'パスワード',
    optionUser:'ユーザー', optionAdmin:'管理者',
    btnCreateUser:'ユーザーを作成', adminUsersList:'登録ユーザー',
    contactTitle:'お問い合わせ',
    contactSub:'ご質問、ご提案、またはご不明な点がございましたら、お気軽にご連絡ください。',
    labelName:'お名前', labelMessage:'メッセージ',
    phContactName:'お名前', phContactMsg:'メッセージを入力...',
    btnContactSend:'メッセージを送信',
    modalEditTitle:'ゲームを編集', btnCancel:'キャンセル', btnSave:'変更を保存',
    cookieTitle:'クッキーのご利用について',
    cookieText:'利便性向上のため、自社および第三者のクッキーを使用しています。全て承認するか、設定をカスタマイズできます。',
    btnRejectAll:'全て拒否', btnCustomize:'カスタマイズ', btnAcceptAll:'全て承認',
    cookiePrefsTitle:'クッキー設定',
    cookieNecessary:'必須', cookieNecessaryDesc:'ウェブサイトの機能に不可欠です。無効にできません。',
    cookieAnalytics:'分析', cookieAnalyticsDesc:'サービス改善のためウェブサイトの使用状況を把握します。',
    cookieMarketing:'マーケティング', cookieMarketingDesc:'パーソナライズされたコンテンツや広告を表示します。',
    btnBack:'戻る', btnSavePrefs:'設定を保存',
    footerBrandHtml:'🎮 ビデオクラブ · 開発者 <strong>Bilbo</strong>',
    currency:'¥', heroDays:'7日間',
    loading:'読み込み中...',
    btnRent:'レンタル', btnReturn:'返却', btnNoStock:'在庫なし',
    btnEdit:'編集', btnAddCopy:'+ コピー', btnRemoveCopy:'− コピー',
    btnDeactivate:'無効化', btnReactivate:'有効化', btnDelete:'削除',
    btnDeactivateAccount:'退会する',
    labelFrom:'開始:', labelUntil:'終了:', labelReturnedAt:'返却:',
    labelLateFee:'延滞料:', labelMemberSince:'登録日:',
    labelProducer:'制作会社:', labelRelease:'発売日:',
    labelNoDesc:'説明なし。', labelPerRental:'/ レンタル',
    labelUser:'ユーザー:', titleAddCopy:'1コピー追加', titleRemoveCopy:'利用可能なコピーを1つ削除',
    badgeActive:'アクティブ', badgeInactive:'非アクティブ', badgeReturned:'返却済み', badgeOverdue:'延滞中',
    labelProjectedFee:'現在の延滞料:',
    btnPrev:'← 前へ', btnNext:'次へ →', labelPage:'ページ',
    copiesOne:'残り1本！', copiesNone:'在庫なし', copiesAvail:'本利用可能',
    copySingular:'コピー', copyPlural:'コピー', availSingular:'利用可能', availPlural:'利用可能',
    detailNoStock:'在庫なし',
    emptyGames:'カタログにゲームがありません。', emptyRentals:'レンタルがありません。',
    emptyUsers:'登録ユーザーがいません。', emptyActiveRentals:'アクティブなレンタルはありません。',
    emptyHistory:'レンタル履歴がありません。',
    gdbSearching:'検索中...', gdbFillForm:'フォームに入力', gdbImport:'インポート',
    gdbNoResults:'検索結果なし:', gdbError:'TheGamesDBへの接続エラー。',
    translatingEs:'🇪🇸 翻訳中...', translatingJa:'🇯🇵 翻訳中...', translatingElv:'🧝 エルフ語に翻訳中...',
    deactivateConfirm:'本当に退会しますか？アカウントが無効化されます。',
    deactivateSuccess:'アカウントが無効化されました。またご利用ください。',
  },
  elv: {
    navCatalog:'Palantír', navContact:'Quetë', navLogin:'Tulë',
    navMyAccount:'Ninya Már', navAdmin:'Heru Palantír', navLogout:'Lenda',
    heroTitleHtml:'Lye <span>Tyalë</span> Mírë',
    heroSubHtml:'Hir, har ar tyalë i alta tyaleli.<br>Ilya lúmë, lá lendë.',
    heroBtn:'Randir Palantír →',
    statTitles:'Quenti', statFrom:'Et', statRental:'An Lendë',
    tabLogin:'Tulë', tabRegister:'Norë',
    phUsername:'Essë', phPassword:'Dolen Quetta', btnEnter:'Tulë',
    phName:'Essë *', phSurname:'Tar-Essë *', phEmail:'Minya *',
    phUser:'Essë *', phPass:'Dolen Quetta * (er–enquë quetti)',
    formRequired:'* Ilya nottë ná anwa',
    btnCreateAccount:'Car Már',
    catalogTitle:'Palantír o Tyaleli', phSearchGame:'Hir Tyalë...',
    tabActiveRentals:'Coirë Lendeli', tabHistory:'Yéninya',
    adminTitle:'Heru Palantír',
    adminTabGames:'Tyaleli', adminTabRentals:'Lendeli', adminTabUsers:'Lië',
    adminCreateGame:'Car Tyalë',
    phTitle:'Quenta', phPlatform:'Cemenë', phGenre:'Lassë',
    phProducer:'Carindo', phPegi:'PEGI (er: 18)',
    phPrice:'Maltë lendë (er: 3.99)', phCover:'Palda URL',
    phDesc:'Quenta', phCopies:'Nottë o Tyaleli',
    btnCreateGame:'Car Tyalë', adminGamesList:'Lassë o Tyaleli',
    gdbTitle:'Hir mi TheGamesDB', phGdbSearch:'Hir tyalë mi TheGamesDB...',
    btnSearch:'Hir', descLangLabel:'Quenta na:',
    adminRentalsTitle:'Ilya Lendeli',
    adminCreateUser:'Car Lié',
    phNewName:'Essë', phNewSurname:'Tar-Essë', phNewEmail:'Minya',
    phNewUsername:'Essë', phNewPassword:'Dolen Quetta',
    optionUser:'Lié', optionAdmin:'Heru',
    btnCreateUser:'Car Lié', adminUsersList:'Norë Lië',
    contactTitle:'Quetë As Me',
    contactSub:'Man quetta, sanë vel andavórë? Quet na me ar me uva quetë na lye.',
    labelName:'Essë', labelMessage:'Quetta',
    phContactName:'Lye Essë', phContactMsg:'Quet lye quetta nó...',
    btnContactSend:'Alcar Quetta',
    modalEditTitle:'Vinya Tyalë', btnCancel:'Lenda', btnSave:'Har Vinya',
    cookieTitle:'Me Har Cocolindi',
    cookieText:'Me sav cocolindi ninya ar en lië na vinya lye tyalë. Pol har ilya vel sina o man lerta.',
    btnRejectAll:'Lá Ilya', btnCustomize:'Vinya', btnAcceptAll:'Har Ilya',
    cookiePrefsTitle:'Cocolindi Istya',
    cookieNecessary:'Anwa', cookieNecessaryDesc:'Anwa an carë i ostë. Lá pol lenda.',
    cookieAnalytics:'Ista', cookieAnalyticsDesc:'Hilya mana lye car mi i ostë na vinya.',
    cookieMarketing:'Norë', cookieMarketingDesc:'Panta quenta ar maltë vinya an lye.',
    btnBack:'Et', btnSavePrefs:'Har Istya',
    footerBrandHtml:'🎮 Tyalë Már · Carnë an <strong>Bilbo</strong>',
    currency:'✧', heroDays:'7 aureli',
    loading:'Tirë...',
    btnRent:'Lendë', btnReturn:'Nosta', btnNoStock:'Vanwa',
    btnEdit:'Vinya', btnAddCopy:'+ Tyalë', btnRemoveCopy:'− Tyalë',
    btnDeactivate:'Lá', btnReactivate:'Coirë', btnDelete:'Undu',
    btnDeactivateAccount:'Lenda Már',
    labelFrom:'Et:', labelUntil:'Na:', labelReturnedAt:'Nosta:',
    labelLateFee:'Recargo:', labelMemberSince:'Lié et',
    labelProducer:'Carindo:', labelRelease:'Panta:',
    labelNoDesc:'Lá quenta.', labelPerRental:'/ lendë',
    labelUser:'Lié:', titleAddCopy:'Anta er tyalë', titleRemoveCopy:'Undu er tyalë',
    badgeActive:'Coirë', badgeInactive:'Lá', badgeReturned:'Nosta', badgeOverdue:'Haura',
    labelProjectedFee:'Recargo:',
    btnPrev:'← Enta', btnNext:'Lúmë →', labelPage:'Ambar',
    copiesOne:'Er tyalë lertal!', copiesNone:'Lá tyaleli', copiesAvail:'tyaleli lertal',
    copySingular:'tyalë', copyPlural:'tyaleli', availSingular:'lerta', availPlural:'lertal',
    detailNoStock:'Vanwa',
    emptyGames:'Lá tyaleli mi palantír.', emptyRentals:'Lá lendeli.',
    emptyUsers:'Lá norë lië.', emptyActiveRentals:'Lá coirë lendeli.',
    emptyHistory:'Lá yéninya lendeli.',
    gdbSearching:'Hirindë...', gdbFillForm:'Har nottë', gdbImport:'Tulë',
    gdbNoResults:'Lá hirwë an', gdbError:'Ná mórë mi TheGamesDB.',
    translatingEs:'🇪🇸 Quetindë...', translatingJa:'🇯🇵 Quetindë...', translatingElv:'🧝 Quetindë na Eldarin...',
    deactivateConfirm:'Anwa lenda lye már? Lye már uva ná lá coirë.',
    deactivateSuccess:'Lye már ná lá coirë. Namarië.',
  }
}

let currentLang = localStorage.getItem('uiLang') || 'es'

// Conversión de divisa
const CURRENCY_RATES = { es: 1, elv: 3 } // elv: 1€ = 3✧ miriani
let jpyRate = null

async function getJpyRate() {
    if (jpyRate) return jpyRate
    try {
        const res = await fetch('https://api.frankfurter.app/latest?from=EUR&to=JPY')
        const data = await res.json()
        jpyRate = data.rates.JPY
    } catch (_) {
        jpyRate = 162 // fallback si falla la API
    }
    return jpyRate
}

function formatPrice(euroAmount) {
    const num = parseFloat(euroAmount)
    if (currentLang === 'ja') {
        const rate = jpyRate || 162
        return t('currency') + Math.round(num * rate).toLocaleString()
    }
    if (currentLang === 'elv') {
        return t('currency') + (num * CURRENCY_RATES.elv).toFixed(2)
    }
    return t('currency') + num
}

function t(key) {
  return (T[currentLang] || T.es)[key] || T.es[key] || key
}

async function applyLang(lang) {
  currentLang = lang
  localStorage.setItem('uiLang', lang)

  if (lang === 'ja') await getJpyRate()

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n)
    if (val) el.textContent = val
  })
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml)
    if (val) el.innerHTML = val
  })
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = t(el.dataset.i18nPh)
    if (val) el.placeholder = val
  })

  // Precio hero dinámico
  const heroPriceEl = document.getElementById('heroPriceFrom')
  if (heroPriceEl) heroPriceEl.textContent = formatPrice(1.99)

  // Switcher activo
  document.querySelectorAll('.lang-sw-btn').forEach(b => b.classList.remove('lang-sw-active'))
  const sw = document.getElementById('langSw' + lang.charAt(0).toUpperCase() + lang.slice(1))
  if (sw) sw.classList.add('lang-sw-active')

  // Re-renderizar contenido dinámico visible
  if (!document.getElementById('catalog').classList.contains('hidden'))       loadGames()
  if (!document.getElementById('userProfile').classList.contains('hidden'))  { loadMyProfile(); loadMyRentals() }
  if (!document.getElementById('adminPanel').classList.contains('hidden')) {
    loadAdminGames()
    if (!document.getElementById('adminTabRentals').classList.contains('hidden')) loadAdminRentals()
    if (!document.getElementById('adminTabUsers').classList.contains('hidden'))   loadAdminUsers()
  }
}

// Toast styles injection
;(function injectToastStyles() {
    const style = document.createElement("style")
    style.textContent = `
        #toast-container {
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 10px;
            pointer-events: none;
        }
        .toast {
            background: #1a1a1a;
            border: 1px solid #2e2e2e;
            color: #e0e0e0;
            padding: 12px 18px;
            border-radius: 6px;
            font-size: 0.875rem;
            max-width: 320px;
            min-width: 220px;
            box-shadow: 0 4px 16px rgba(0,0,0,0.5);
            pointer-events: auto;
            animation: toastSlideIn 0.25s ease forwards;
            border-left: 4px solid #555;
            line-height: 1.4;
        }
        .toast.success { border-left-color: #22c55e; }
        .toast.error   { border-left-color: #ef4444; }
        .toast.info    { border-left-color: #6b7280; }
        .toast.fade-out {
            animation: toastFadeOut 0.35s ease forwards;
        }
        @keyframes toastSlideIn {
            from { opacity: 0; transform: translateX(60px); }
            to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes toastFadeOut {
            from { opacity: 1; transform: translateX(0);    }
            to   { opacity: 0; transform: translateX(60px); }
        }
    `
    document.head.appendChild(style)

    const container = document.createElement("div")
    container.id = "toast-container"
    document.body.appendChild(container)
})()

// Toast helper
function showToast(message, type = "info") {
    const container = document.getElementById("toast-container")
    const toast = document.createElement("div")
    toast.className = "toast " + type
    toast.textContent = message
    container.appendChild(toast)

    setTimeout(() => {
        toast.classList.add("fade-out")
        toast.addEventListener("animationend", () => toast.remove(), { once: true })
    }, 3000)
}

// Loading state helper
function setLoading(btn, loading) {
    if (!btn) return
    if (loading) {
        btn.dataset.originalText = btn.textContent
        btn.textContent = t('loading')
        btn.disabled = true
    } else {
        btn.textContent = btn.dataset.originalText || btn.textContent
        btn.disabled = false
    }
}

// API fetch helper
async function apiFetch(path, options = {}) {
    const token = getToken()
    const headers = { "Content-Type": "application/json", ...(options.headers || {}) }
    if (token) headers["Authorization"] = "Bearer " + token

    const res = await fetch(API + path, { ...options, headers })

    if (res.status === 401) {
        logout()
        throw new Error("Sesión expirada. Por favor inicia sesión de nuevo.")
    }

    if (!res.ok) {
        let errMsg = "Error en la petición (" + res.status + ")"
        try {
            const text = await res.text()
            if (text) errMsg = text
        } catch (_) { /* ignore */ }
        throw new Error(errMsg)
    }

    return res
}

// Token / role helpers

function getToken() {
    const t = localStorage.getItem("token")
    return (t && t !== "null" && t !== "undefined") ? t : null
}
function getRole()  { return localStorage.getItem("role") }

function authHeaders() {
    return { "Content-Type": "application/json", "Authorization": "Bearer " + getToken() }
}

function setLoggedIn(role) {
    const isUser  = role === "USER"
    const isAdmin = role === "ADMIN"
    const out     = !isUser && !isAdmin

    document.getElementById("btnLogin").classList.toggle("hidden", !out)
    document.getElementById("btnMyAccount").classList.toggle("hidden", !isUser)
    document.getElementById("btnAdminPanel").classList.toggle("hidden", !isAdmin)
    document.getElementById("btnLogout").classList.toggle("hidden", out)
}

function hideAll() {
    ["landing", "catalog", "userAuth", "userProfile", "adminPanel", "contacto"].forEach(id =>
        document.getElementById(id).classList.add("hidden")
    )
}

function goHome() {
    hideAll()
    document.getElementById("landing").classList.remove("hidden")
    history.pushState(null, "", "/")
}

function showCatalog() {
    hideAll()
    document.getElementById("catalog").classList.remove("hidden")
    loadGames()
    history.pushState(null, "", "/catalogo")
}

function showUserAuth() {
    hideAll()
    document.getElementById("userAuth").classList.remove("hidden")
    history.pushState(null, "", "/login")
}

function showUserProfile() {
    hideAll()
    document.getElementById("userProfile").classList.remove("hidden")
    loadMyProfile()
    loadMyRentals()
    history.pushState(null, "", "/perfil")
}

function goAdminPanel() {
    hideAll()
    document.getElementById("adminPanel").classList.remove("hidden")
    switchAdminTab("games")
    loadAdminGames()
    history.pushState(null, "", "/panel")
}

function showContacto() {
    hideAll()
    document.getElementById("contacto").classList.remove("hidden")
    history.pushState(null, "", "/contacto")
}

async function submitContact() {
    const name    = document.getElementById("contactName").value.trim()
    const email   = document.getElementById("contactEmail").value.trim()
    const message = document.getElementById("contactMessage").value.trim()
    const feedback = document.getElementById("contactFeedback")
    const btn = document.querySelector("#contacto button[onclick*='submitContact']") ||
                document.querySelector("#contacto .btn-submit") ||
                document.querySelector("#contacto button[type='submit']")

    if (!name || !email || !message) {
        feedback.textContent = "Por favor rellena todos los campos."
        feedback.className = "contact-feedback error"
        feedback.classList.remove("hidden")
        return
    }

    let recaptchaToken
    try {
        recaptchaToken = await grecaptcha.execute("6Lefq44sAAAAAGFi4YEtd9QEYIbUHfD5QE8wBEV0", { action: "contact" })
    } catch (e) {
        feedback.textContent = "Error al verificar reCAPTCHA. Recarga la página e inténtalo de nuevo."
        feedback.className = "contact-feedback error"
        feedback.classList.remove("hidden")
        return
    }

    setLoading(btn, true)
    try {
        const res = await fetch(API + "/contacto/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message, recaptchaToken })
        })

        if (res.ok) {
            feedback.textContent = "¡Mensaje enviado! Recibirás un email de confirmación con el justificante en PDF."
            feedback.className = "contact-feedback success"
            document.getElementById("contactName").value = ""
            document.getElementById("contactEmail").value = ""
            document.getElementById("contactMessage").value = ""
            showToast("Mensaje enviado correctamente.", "success")
        } else {
            feedback.textContent = "Error al enviar el mensaje. Inténtalo de nuevo."
            feedback.className = "contact-feedback error"
            showToast("Error al enviar el mensaje.", "error")
        }
        feedback.classList.remove("hidden")
    } finally {
        setLoading(btn, false)
    }
}

// Tab helpers

function switchTab(tab) {
    document.getElementById("formLogin").classList.toggle("hidden", tab !== "login")
    document.getElementById("formRegister").classList.toggle("hidden", tab !== "register")
    document.getElementById("tabLogin").classList.toggle("active", tab === "login")
    document.getElementById("tabRegister").classList.toggle("active", tab === "register")

    if (tab === "register") {
        ["regName", "regSurname", "regEmail", "regUser", "regPass"].forEach(id =>
            document.getElementById(id).value = ""
        )
    } else {
        ["loginUser", "loginPass"].forEach(id =>
            document.getElementById(id).value = ""
        )
    }
}

function switchRentalTab(tab) {
    document.getElementById("activeRentals").classList.toggle("hidden", tab !== "active")
    document.getElementById("historyRentals").classList.toggle("hidden", tab !== "history")
    document.getElementById("tabActive").classList.toggle("active", tab === "active")
    document.getElementById("tabHistory").classList.toggle("active", tab === "history")
}

// Auth

async function userLogin() {
    const username = document.getElementById("loginUser").value
    const password = document.getElementById("loginPass").value
    const btn = document.getElementById("btnLoginSubmit") ||
                document.querySelector("#formLogin button[type='submit']") ||
                document.querySelector("#formLogin button")

    setLoading(btn, true)
    try {
        const res = await fetch(API + "/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        })

        if (!res.ok) {
            showToast("Usuario o contraseña incorrectos.", "error")
            return
        }

        const data = await res.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("role", data.role)
        setLoggedIn(data.role)

        if (data.role === "ADMIN") {
            goAdminPanel()
        } else {
            showUserProfile()
        }
    } catch (e) {
        showToast("Error al iniciar sesión. Inténtalo de nuevo.", "error")
    } finally {
        setLoading(btn, false)
    }
}

async function userRegister() {
    const name     = document.getElementById("regName").value.trim()
    const surname  = document.getElementById("regSurname").value.trim()
    const email    = document.getElementById("regEmail").value.trim()
    const username = document.getElementById("regUser").value.trim()
    const password = document.getElementById("regPass").value
    const btn = document.getElementById("btnRegisterSubmit") ||
                document.querySelector("#formRegister button[type='submit']") ||
                document.querySelector("#formRegister button")

    const missing = []
    if (!name)     missing.push("Nombre")
    if (!surname)  missing.push("Apellidos")
    if (!email)    missing.push("Email")
    if (!username) missing.push("Usuario")
    if (!password) missing.push("Contraseña")

    if (missing.length > 0) {
        showToast("Campos obligatorios: " + missing.join(", ") + ".", "error")
        return
    }

    if (password.length < 6) {
        showToast("La contraseña debe tener al menos 6 caracteres.", "error")
        return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        showToast("El email no tiene un formato válido.", "error")
        return
    }

    const body = { name, surname, email, username, password }

    setLoading(btn, true)
    try {
        const res = await fetch(API + "/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            const err = await res.text().catch(() => "")
            if (err.includes("Username already taken") || err.includes("username")) {
                showToast("Ese nombre de usuario ya está en uso. Elige otro.", "error")
            } else if (err.includes("Email already") || err.includes("email")) {
                showToast("Ese email ya está registrado. ¿Ya tienes cuenta?", "error")
            } else {
                showToast("Error al registrarse. Revisa los datos e inténtalo de nuevo.", "error")
            }
            return
        }

        ["regName", "regSurname", "regEmail", "regUser", "regPass"].forEach(id =>
            document.getElementById(id).value = ""
        )

        const data = await res.json()
        localStorage.setItem("token", data.token)
        localStorage.setItem("role", data.role)
        setLoggedIn(data.role)
        showUserProfile()
    } catch (e) {
        showToast("Error al registrarse. Inténtalo de nuevo.", "error")
    } finally {
        setLoading(btn, false)
    }
}

async function logout() {
    const token = getToken()
    if (token) {
        await fetch(API + "/auth/logout", {
            method: "POST",
            headers: { "Authorization": "Bearer " + token }
        }).catch(() => {})
    }
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    setLoggedIn(null)
    hideAll()
    document.getElementById("landing").classList.remove("hidden")
}

// User profile

async function loadMyProfile() {
    try {
        const res = await apiFetch("/me")
        const user = await res.json()
        const initials = (user.name[0] + user.surname[0]).toUpperCase()
        document.getElementById("profileInfo").innerHTML = `
            <div class="profile-avatar">${initials}</div>
            <div class="profile-details">
                <h2>${user.name} ${user.surname}</h2>
                <p class="profile-username">@${user.username}</p>
                <p class="profile-email">${user.email}</p>
                <p class="profile-since">${t('labelMemberSince')} ${user.createdAt}</p>
            </div>
            <button class="btn-deactivate" onclick="deactivateMyAccount()">${t('btnDeactivateAccount')}</button>
        `
    } catch (_) { /* handled by apiFetch */ }
}

async function deactivateMyAccount() {
    if (!confirm(t('deactivateConfirm'))) return

    try {
        await apiFetch("/me/deactivate", { method: "POST" })
        showToast(t('deactivateSuccess'), "info")
        await logout()
    } catch (e) {
        showToast("Error al darse de baja.", "error")
    }
}

async function loadMyRentals() {
    try {
        const res = await apiFetch("/me/rentals")
        const rentals = await res.json()
        renderActiveRentals(rentals.filter(r => r.status === "ACTIVE"))
        renderHistoryRentals(rentals.filter(r => r.status === "RETURNED"))
    } catch (_) { /* handled by apiFetch */ }
}

function renderActiveRentals(rentals) {
    const container = document.getElementById("activeRentals")
    if (rentals.length === 0) {
        container.innerHTML = `<p class="empty-msg">${t('emptyActiveRentals')}</p>`
        return
    }
    container.innerHTML = rentals.map(r => `
        <div class="rental-card${r.overdue ? ' overdue' : ''}">
            <div class="rental-info">
                <h4>${r.gameTitle}${r.overdue ? ` <span class="badge-overdue">${t('badgeOverdue')}</span>` : ''}</h4>
                <p>${t('labelFrom')} ${r.startAt} &nbsp;·&nbsp; ${t('labelUntil')} ${r.dueAt}</p>
                <p class="rental-price">${formatPrice(r.rentalPriceStart)}${r.overdue ? ` &nbsp;·&nbsp; <span class="late-fee">${t('labelProjectedFee')} ${formatPrice(r.projectedLateFee)}</span>` : ''}</p>
            </div>
            <button onclick="returnRental('${r.id}')">${t('btnReturn')}</button>
        </div>
    `).join("")
}

function renderHistoryRentals(rentals) {
    const container = document.getElementById("historyRentals")
    if (rentals.length === 0) {
        container.innerHTML = `<p class="empty-msg">${t('emptyHistory')}</p>`
        return
    }
    container.innerHTML = rentals.map(r => `
        <div class="rental-card returned">
            <div class="rental-info">
                <h4>${r.gameTitle}</h4>
                <p>${t('labelFrom')} ${r.startAt} &nbsp;·&nbsp; ${t('labelReturnedAt')} ${r.returnedAt}</p>
                <p class="rental-price">${formatPrice(r.rentalPriceStart)}${r.lateFee > 0 ? ` &nbsp;·&nbsp; <span class="late-fee">${t('labelLateFee')} ${formatPrice(r.lateFee)}</span>` : ""}</p>
            </div>
            <span class="badge-returned">${t('badgeReturned')}</span>
        </div>
    `).join("")
}

async function returnRental(rentalId) {
    try {
        await apiFetch("/rentals/" + rentalId + "/return", { method: "PUT" })
        showToast("Juego devuelto correctamente.", "success")
        loadMyRentals()
    } catch (e) {
        showToast("Error al devolver el juego.", "error")
    }
}

// Catalog

async function rentGame(gameId) {
    if (!getToken()) { showUserAuth(); return }

    const btn = document.querySelector(`.btn-rent[onclick*="${gameId}"]`)
    setLoading(btn, true)
    try {
        await apiFetch("/rentals", {
            method: "POST",
            body: JSON.stringify({ gameId })
        })
        showToast("¡Juego alquilado correctamente!", "success")
        showUserProfile()
        loadGames()
    } catch (e) {
        const msg = e.message || "Error al alquilar el juego."
        showToast(msg, "error")
        console.error("Error alquilar:", e)
    } finally {
        setLoading(btn, false)
    }
}

let catalogPage = 0
let catalogTotalPages = 1
let catalogSearch = ""
let searchDebounceTimer = null

async function loadGames(page = 0, search = catalogSearch) {
    catalogPage = page
    catalogSearch = search
    const params = new URLSearchParams({ page, size: 12 })
    if (search) params.set("search", search)
    const res = await fetch(API + "/games?" + params)
    const data = await res.json()
    const games = data.content || []
    catalogTotalPages = data.totalPages || 1

    const container = document.getElementById("games")
    const role = getRole()
    container.innerHTML = ""

    if (games.length === 0) {
        container.innerHTML = `<p class="empty-msg">${t('emptyGames')}</p>`
    } else {
        games.forEach(g => {
            const div = document.createElement("div")
            div.className = "game-card"
            div.style.cursor = "pointer"
            let copiesLabel
            if (g.availableCopies === 1) {
                copiesLabel = `<p class="copies-warn">${t('copiesOne')}</p>`
            } else if (g.availableCopies === 0) {
                copiesLabel = `<p class="copies-none">${t('copiesNone')}</p>`
            } else if (role === "USER") {
                copiesLabel = `<p class="copies-available">${g.availableCopies} ${t('copiesAvail')}</p>`
            } else {
                copiesLabel = ""
            }
            div.innerHTML = `
                <img src="${g.coverUrl}" onerror="this.style.display='none'">
                <h4>${g.title}</h4>
                <p>${g.platform}</p>
                <p>${g.genre}</p>
                ${g.description ? `<p class="game-desc">${g.description}</p>` : ""}
                <p class="game-price">${formatPrice(g.rentalPrice)}</p>
                ${copiesLabel}
                ${role === "USER" && g.availableCopies > 0 ? `<button class="btn-rent" onclick="event.stopPropagation();rentGame('${g.id}')">${t('btnRent')}</button>` : ""}
                ${role === "USER" && g.availableCopies === 0 ? `<button class="btn-rent" disabled style="opacity:0.4;cursor:not-allowed;">${t('btnNoStock')}</button>` : ""}
            `
            div.addEventListener("click", () => openGameDetail(g))
            container.appendChild(div)
        })
    }
    renderCatalogPagination()
}

function renderCatalogPagination() {
    const el = document.getElementById("catalogPagination")
    if (!el) return
    if (catalogTotalPages <= 1) { el.innerHTML = ""; return }
    el.innerHTML = `
        <button class="btn-page" ${catalogPage === 0 ? "disabled" : ""} onclick="loadGames(${catalogPage - 1})">${t('btnPrev')}</button>
        <span class="page-info">${t('labelPage')} ${catalogPage + 1} / ${catalogTotalPages}</span>
        <button class="btn-page" ${catalogPage >= catalogTotalPages - 1 ? "disabled" : ""} onclick="loadGames(${catalogPage + 1})">${t('btnNext')}</button>
    `
}

// Game detail modal

function openGameDetail(g) {
    document.getElementById("detailCover").src        = g.coverUrl || ""
    document.getElementById("detailTitle").textContent = g.title || ""
    document.getElementById("detailPlatform").textContent = g.platform || ""
    document.getElementById("detailGenre").textContent    = g.genre    || ""

    const pegiEl = document.getElementById("detailPegi")
    pegiEl.textContent = g.pegi ? "PEGI " + g.pegi : ""
    pegiEl.style.display = g.pegi ? "" : "none"

    document.getElementById("detailProducer").textContent  = g.producer    ? t('labelProducer') + " " + g.producer : ""
    document.getElementById("detailRelease").textContent   = g.releaseDate ? t('labelRelease') + " " + (Array.isArray(g.releaseDate) ? g.releaseDate[0] : String(g.releaseDate).slice(0, 10)) : ""
    document.getElementById("detailDescription").textContent = g.description || t('labelNoDesc')
    document.getElementById("detailPrice").textContent     = formatPrice(g.rentalPrice) + " " + t('labelPerRental')
    document.getElementById("detailCopies").textContent    = g.availableCopies > 0
        ? g.availableCopies + " " + (g.availableCopies !== 1 ? t('copyPlural') : t('copySingular')) + " " + (g.availableCopies !== 1 ? t('availPlural') : t('availSingular'))
        : t('detailNoStock')

    const actionsEl = document.getElementById("detailActions")
    const role = getRole()
    if (role === "USER" && g.availableCopies > 0) {
        actionsEl.innerHTML = `<button onclick="rentGame('${g.id}');closeDetailModal()">${t('btnRent')}</button>`
    } else if (role === "USER") {
        actionsEl.innerHTML = `<button disabled style="opacity:0.4;cursor:not-allowed;width:100%">${t('detailNoStock')}</button>`
    } else {
        actionsEl.innerHTML = ""
    }

    document.getElementById("gameDetailModal").classList.remove("hidden")
}

function closeDetailModal(e) {
    if (!e || e.target === document.getElementById("gameDetailModal")) {
        document.getElementById("gameDetailModal").classList.add("hidden")
    }
}

// Admin tabs

function switchAdminTab(tab) {
    ["games", "rentals", "users"].forEach(t => {
        document.getElementById("adminTab" + t.charAt(0).toUpperCase() + t.slice(1))
            .classList.toggle("hidden", t !== tab)
        document.getElementById("tab" + t.charAt(0).toUpperCase() + t.slice(1))
            .classList.toggle("active", t === tab)
    })
    if (tab === "rentals") loadAdminRentals()
    if (tab === "users")   loadAdminUsers()
}

// Admin

async function createGame() {
    const coversInput = document.getElementById("copies")
    const numCopies   = parseInt(coversInput ? coversInput.value : "1") || 1

    const game = {
        active:      true,
        title:       document.getElementById("title").value,
        description: document.getElementById("description").value,
        platform:    document.getElementById("platform").value,
        genre:       document.getElementById("genre").value,
        producer:    document.getElementById("producer").value,
        pegi:        document.getElementById("pegi").value,
        releaseDate: document.getElementById("releaseDate").value || new Date().toISOString().slice(0, 10),
        rentalPrice: parseFloat(document.getElementById("price").value),
        coverUrl:    document.getElementById("coverUrl").value,
    }

    try {
        const res = await apiFetch("/admin/games", {
            method: "POST",
            body: JSON.stringify(game)
        })
        const created = await res.json()
        await addCopies(created.id, numCopies)
        showToast("Juego creado correctamente.", "success")
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al crear el juego. Revisa los campos.", "error")
    }
}

async function loadAdminGames() {
    try {
        const res = await apiFetch("/admin/games/all")
        const games = await res.json()
        const container = document.getElementById("adminGames")
        container.innerHTML = ""

        if (games.length === 0) {
            container.innerHTML = `<p class="empty-msg">${t('emptyGames')}</p>`
            return
        }

        games.forEach(g => {
            const div = document.createElement("div")
            div.style.opacity = g.active ? "1" : "0.45"
            div.innerHTML = `
                <span>
                    ${g.title}
                    <span class="status-badge ${g.active ? 'badge-active' : 'badge-done'}" style="margin-left:6px">
                        ${g.active ? t('badgeActive') : t('badgeInactive')}
                    </span>
                    <span class="copies-badge" style="margin-left:6px">
                        ${g.availableCopies}/${g.totalCopies} ${t('copyPlural')}
                    </span>
                </span>
                <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
                    ${g.active ? `<button onclick="openEditModal('${g.id}')">${t('btnEdit')}</button>` : ''}
                    ${g.active ? `<button onclick="adminAddCopy('${g.id}')" title="${t('titleAddCopy')}">${t('btnAddCopy')}</button>` : ''}
                    ${g.active && g.availableCopies > 0 ? `<button class="btn-ghost" onclick="adminRemoveCopy('${g.id}')" title="${t('titleRemoveCopy')}">${t('btnRemoveCopy')}</button>` : ''}
                    <button onclick="toggleGame('${g.id}', ${!g.active})">
                        ${g.active ? t('btnDeactivate') : t('btnReactivate')}
                    </button>
                </div>
            `
            container.appendChild(div)
        })
    } catch (_) { /* handled by apiFetch */ }
}

async function toggleGame(id, active) {
    try {
        await apiFetch("/admin/games/" + id + "?active=" + active, { method: "PATCH" })
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al cambiar el estado del juego.", "error")
    }
}

async function addCopies(gameId, amount) {
    await apiFetch("/admin/games/" + gameId + "/copies?amount=" + amount, {
        method: "POST"
    }).catch(() => {})
}

async function adminAddCopy(gameId) {
    await addCopies(gameId, 1)
    loadAdminGames()
}

async function adminRemoveCopy(gameId) {
    try {
        await apiFetch("/admin/games/" + gameId + "/copies?amount=1", { method: "DELETE" })
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al eliminar la copia.", "error")
    }
}

async function deleteGame(id) {
    try {
        await apiFetch("/admin/games/" + id, { method: "DELETE" })
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al eliminar el juego.", "error")
    }
}

async function loadAdminRentals() {
    try {
        const res = await apiFetch("/admin/rentals")
        const rentals = await res.json()
        const container = document.getElementById("adminRentalsList")
        if (rentals.length === 0) {
            container.innerHTML = `<p class="empty-msg">${t('emptyRentals')}</p>`
            return
        }
        container.innerHTML = rentals.map(r => `
            <div class="admin-row">
                <div class="admin-row-info">
                    <span class="admin-row-title">${r.gameTitle}</span>
                    <span class="admin-row-sub">${t('labelUser')} ${r.userId} &nbsp;·&nbsp; ${r.startAt} → ${r.dueAt} &nbsp;·&nbsp;
                        <span class="status-badge ${r.status === 'ACTIVE' ? 'badge-active' : 'badge-done'}">${r.status}</span>
                    </span>
                </div>
                <button class="btn-delete" onclick="deleteRental('${r.id}')">${t('btnDelete')}</button>
            </div>
        `).join("")
    } catch (_) { /* handled by apiFetch */ }
}

async function deleteRental(id) {
    try {
        await apiFetch("/admin/rentals/" + id, { method: "DELETE" })
        showToast("Alquiler eliminado.", "info")
        loadAdminRentals()
    } catch (e) {
        showToast(e.message || "Error al eliminar el alquiler.", "error")
    }
}

async function loadAdminUsers() {
    try {
        const res = await apiFetch("/admin/users")
        const users = await res.json()
        const container = document.getElementById("adminUsersList")
        if (users.length === 0) {
            container.innerHTML = `<p class="empty-msg">${t('emptyUsers')}</p>`
            return
        }
        container.innerHTML = users.map(u => {
            const isActive = u.status === "ACTIVE" || u.status == null
            return `
            <div class="admin-row" style="opacity:${isActive ? '1' : '0.5'}">
                <div class="admin-row-info">
                    <span class="admin-row-title">
                        ${u.name} ${u.surname}
                        <span class="status-badge ${isActive ? 'badge-active' : 'badge-done'}" style="margin-left:6px">
                            ${isActive ? t('badgeActive') : t('badgeInactive')}
                        </span>
                    </span>
                    <span class="admin-row-sub">@${u.username} &nbsp;·&nbsp; ${u.email} &nbsp;·&nbsp; ${t('labelMemberSince')} ${u.createdAt}</span>
                </div>
                <button class="btn-delete" onclick="toggleUser('${u.id}', ${!isActive})">
                    ${isActive ? t('btnDeactivate') : t('btnReactivate')}
                </button>
            </div>`
        }).join("")
    } catch (_) { /* handled by apiFetch */ }
}

async function adminCreateUser() {
    const body = {
        name:     document.getElementById("newUserName").value,
        surname:  document.getElementById("newUserSurname").value,
        email:    document.getElementById("newUserEmail").value,
        username: document.getElementById("newUserUsername").value,
        password: document.getElementById("newUserPassword").value,
        role:     document.getElementById("newUserRole").value,
    }
    const btn = document.querySelector("#adminTabUsers button[onclick*='adminCreateUser']") ||
                document.querySelector("#adminTabUsers .btn-submit")

    setLoading(btn, true)
    try {
        const res = await apiFetch("/admin/users", {
            method: "POST",
            body: JSON.stringify(body)
        })
        const user = await res.json()
        showToast("Usuario creado: @" + user.username + ". Email de bienvenida enviado a " + user.email + ".", "success")
        ;["newUserName","newUserSurname","newUserEmail","newUserUsername","newUserPassword"]
            .forEach(id => document.getElementById(id).value = "")
        document.getElementById("newUserRole").value = "USER"
        loadAdminUsers()
    } catch (e) {
        showToast(e.message || "Error al crear el usuario.", "error")
    } finally {
        setLoading(btn, false)
    }
}

async function deleteUser(id) {
    try {
        await apiFetch("/admin/users/" + id, { method: "DELETE" })
        loadAdminUsers()
    } catch (e) {
        showToast(e.message || "Error al eliminar el usuario.", "error")
    }
}

async function toggleUser(id, active) {
    try {
        await apiFetch("/admin/users/" + id + "?active=" + active, { method: "PATCH" })
        loadAdminUsers()
    } catch (e) {
        showToast(e.message || "Error al cambiar el estado del usuario.", "error")
    }
}

// Edit game modal

let currentEditId = null

async function openEditModal(gameId) {
    try {
        const res = await fetch(API + "/games/" + gameId)
        if (!res.ok) { showToast("No se pudo cargar el juego.", "error"); return }
        const g = await res.json()
        if (!g) { showToast("Juego no encontrado.", "error"); return }

        currentEditId = gameId
        document.getElementById("editTitle").value       = g.title       || ''
        document.getElementById("editPlatform").value    = g.platform    || ''
        document.getElementById("editGenre").value       = g.genre       || ''
        document.getElementById("editProducer").value    = g.producer    || ''
        document.getElementById("editPegi").value        = g.pegi        || ''
        document.getElementById("editDescription").value = g.description || ''


        const rd = g.releaseDate
        if (Array.isArray(rd)) {
            const [y, m, d] = rd
            document.getElementById("editReleaseDate").value =
                `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`
        } else {
            document.getElementById("editReleaseDate").value = rd ? rd.slice(0, 10) : ''
        }

        document.getElementById("editModal").classList.remove("hidden")
    } catch (e) {
        showToast("Error al abrir el editor.", "error")
    }
}

function closeEditModal() {
    document.getElementById("editModal").classList.add("hidden")
    currentEditId = null
}

async function submitEditGame() {
    if (!currentEditId) return

    const body = {
        title:       document.getElementById("editTitle").value,
        platform:    document.getElementById("editPlatform").value,
        genre:       document.getElementById("editGenre").value,
        producer:    document.getElementById("editProducer").value,
        pegi:        document.getElementById("editPegi").value,
        releaseDate: document.getElementById("editReleaseDate").value,
        description: document.getElementById("editDescription").value,
    }

    const btn = document.getElementById("btnSaveGame") ||
                document.querySelector("#editModal button[onclick*='submitEditGame']") ||
                document.querySelector("#editModal .btn-submit")

    setLoading(btn, true)
    try {
        await apiFetch("/admin/games/" + currentEditId, {
            method: "PUT",
            body: JSON.stringify(body)
        })
        showToast("Cambios guardados correctamente.", "success")
        closeEditModal()
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al guardar los cambios.", "error")
    } finally {
        setLoading(btn, false)
    }
}

// TheGamesDB

let gdbSearchResults = []
let translationLang = 'es'

function setTranslationLang(lang, btn) {
    translationLang = lang
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('lang-active'))
    btn.classList.add('lang-active')
}

async function searchGamesDb() {
    const name = document.getElementById("gdbSearch").value.trim()
    if (!name) return

    const container = document.getElementById("gdbResults")
    container.innerHTML = `<p class="empty-msg">${t('gdbSearching')}</p>`

    try {
        const res = await apiFetch("/admin/gamesdb/search?name=" + encodeURIComponent(name))
        gdbSearchResults = await res.json()

        if (gdbSearchResults.length === 0) {
            container.innerHTML = `<p class="empty-msg">${t('gdbNoResults')} "${name}".</p>`
            return
        }

        container.innerHTML = '<div class="gdb-results-grid">' +
            gdbSearchResults.map((g, i) => `
                <div class="gdb-card">
                    <img class="gdb-cover" src="${g.coverUrl || ''}" alt="" onerror="this.style.display='none'">
                    <div class="gdb-info">
                        <h4 class="gdb-title">${g.title}</h4>
                        <p class="gdb-meta">
                            ${g.platform || 'Plataforma desconocida'}
                            ${g.releaseDate ? '&nbsp;·&nbsp;' + g.releaseDate.slice(0, 4) : ''}
                            ${g.rating ? '&nbsp;·&nbsp;PEGI ' + g.rating : ''}
                        </p>
                        ${g.overview ? `<p class="gdb-overview">${g.overview.slice(0, 140)}${g.overview.length > 140 ? '...' : ''}</p>` : ''}
                        <div class="gdb-actions">
                            <button class="btn-ghost btn-sm" onclick="fillFromGdb(${i})">${t('gdbFillForm')}</button>
                            <button class="btn-sm" onclick="importFromGdb(${g.id})">${t('gdbImport')}</button>
                        </div>
                    </div>
                </div>
            `).join('') +
        '</div>'
    } catch (e) {
        container.innerHTML = `<p class="empty-msg">${t('gdbError')}</p>`
    }
}

async function fillFromGdb(i) {
    const g = gdbSearchResults[i]
    document.getElementById("title").value       = g.title    || ''
    document.getElementById("platform").value    = g.platform || ''
    document.getElementById("genre").value       = g.genre    || ''
    document.getElementById("producer").value    = g.producer || ''
    document.getElementById("pegi").value        = g.rating   || ''
    document.getElementById("coverUrl").value    = g.coverUrl || ''
    if (g.releaseDate) {
        const d = g.releaseDate.length === 4 ? g.releaseDate + "-01-01" : g.releaseDate
        document.getElementById("releaseDate").value = d.slice(0, 10)
    }

    const descField = document.getElementById("description")
    if (g.overview) {
        descField.value = t('translating' + translationLang.charAt(0).toUpperCase() + translationLang.slice(1))
        try {
            const res = await apiFetch("/admin/gamesdb/translate?text=" + encodeURIComponent(g.overview) + "&lang=" + translationLang)
            descField.value = (await res.json()).translated
        } catch (_) {
            descField.value = g.overview
        }
    } else {
        descField.value = ''
    }

    document.getElementById("title").scrollIntoView({ behavior: 'smooth', block: 'center' })
}

async function importFromGdb(gamedbId) {
    const copies = parseInt(prompt("¿Cuántas copias crear?", "1")) || 1

    try {
        const res = await apiFetch("/admin/gamesdb/import/" + gamedbId + "?copies=" + copies, {
            method: "POST"
        })
        const game = await res.json()
        showToast("¡Juego importado: " + game.title + " (" + copies + " copias)!", "success")
        loadAdminGames()
    } catch (e) {
        showToast(e.message || "Error al importar el juego.", "error")
    }
}

// Init

async function initApp() {
    const savedRole = getRole()
    if (savedRole) setLoggedIn(savedRole)

    let validRole = savedRole

    // Token y rol
    if (getToken()) {
        const check = await fetch(API + "/me", { headers: authHeaders() }).catch(() => null)
        if (!check || check.status === 401) {
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            setLoggedIn(null)
            validRole = null
        } else if (check.ok) {
            const profile = await check.json()
            if (profile.role && profile.role !== savedRole) {
                localStorage.setItem("role", profile.role)
                setLoggedIn(profile.role)
            }
            validRole = profile.role || savedRole
        }
    }


    const path = location.pathname
    if (path === "/catalogo") {
        showCatalog()
    } else if (path === "/perfil" && validRole === "USER") {
        showUserProfile()
    } else if (path === "/panel" && validRole === "ADMIN") {
        goAdminPanel()
    } else if (path === "/login") {
        showUserAuth()
    } else if (path === "/contacto") {
        showContacto()
    } else {
        goHome()
    }
}

initApp().then(() => applyLang(currentLang))

document.getElementById("editModal").addEventListener("click", e => {
    if (e.target === e.currentTarget) closeEditModal()
})

document.getElementById("search").addEventListener("input", e => {
    clearTimeout(searchDebounceTimer)
    searchDebounceTimer = setTimeout(() => loadGames(0, e.target.value.trim()), 300)
})
