module.exports = {
  CODE: "ru_ru",
  NAME: "Русский",
  REGION: "Россия",
  GLOBAL: {
    ERROR: "Произошла непредвиденная ошибка.",
    NOTHING: "Здесь пока что ничего нет.",
    NONE: "Нет",
    NOT_SPECIFIED: "Не указано",
    NOT_AVAILABLE: "Недоступно",
    PROVIDE_ARGS: "Пожалуйста, предоставьте аргументы!",
    LONG_ARGS: "Предоставленные аргументы слишком длинны! ({length} > {limit})",
  },
  BOT: {
    GENERAL_INFO: "Основная информация",
    PLATFORM: "Платформа",
    LATENCY: "Задержка",
    SHARDS: "Шардов",
    SERVERS: "Серверов",
    USERS: "Пользователей",
    COMMANDS: "Команд",
    VOICE_CONNECTIONS: "Голосовых подключений",
    USEFUL_LINKS: "Полезные ссылки",
    SUPPORT_SERVER: "Сервер поддержки",
    ADD: "Добавить на свой сервер",
    SOURCE_CODE: "Исходный код",
    NEED_PERMS: "Мне необходимо больше прав для выполнения команды: {neededPermissions}",
    LOCALE_UPDATED: "Локаль успешно обновлена на **`{locale}`**!",
    PREFIX_UPDATED: "Префикс успешно обновлен на **`{prefix}`**"
  },
  MEMBER: {
    AVATAR: "Аватар {username}",
    COOLDOWN: "Пожалуйста, подождите еще **{cooldown}** сек. перед тем, как снова использовать команду `{cmd}`.",
    NO_PERMS: "К сожалению, у вас нет необходимых для выполнения этой команды прав.",
    NEED_PERMS: "Вам необходимо больше прав для выполнения команды: {neededPermissions}",
    STATUS: "Статус",
    STATUSES: {
      ONLINE: "В сети",
      IDLE: "Не активен",
      DND: "Не беспокоить",
      OFFLINE: "Не в сети"
    },
    ID: "ID пользователя",
    CREATION_DATE: "Дата создания",
    CUSTOM_STATUS: "Пользовательский статус",
    ROLES: "Роли",
    HUGS: "обнимает",
    HUGS_THEMSELVES: "обнимает себя",
    SLAPS: "даёт пощёчину",
    SLAPS_THEMSELVES: "даёт пощёчину себе"
  },
  SERVER: {
    ID: "ID сервера",
    OWNER: "Владелец",
    VERIFICATION_LEVEL: "Уровень проверки",
    LEVELS: {
      NONE: "Отсутствует",
      LOW: "Низкий",
      MEDIUM: "Средний",
      HIGH: "Высокий",
      VERY_HIGH: "Очень высокий"
    },
    CREATION_DATE: "Дата создания",
    INVITES: "Приглашений", // Родительный падеж
    BANS: "Банов", // Родительный падеж
    MEMBERS: "Участники",
    MEMBERS_TOTAL: "Всего",
    HUMANS: "Людей", // Родительный падеж
    BOTS: "Ботов", // Родительный падеж
    STATUSES: "Статусы"
  },
  IMAGE: {
    FAILED_TO_LOAD: "Нажмите сюда, если изображение не загрузилось.",
  },
  TIME: {
    DAYS: "дн.",
    HOURS: "ч.",
    MINUTES: "мин.",
    SECONDS: "сек.",
    MILLISECONDS: "мс"
  },
  HELP: {
    HELP: "Список команд",
    HELP_DESC: "Используйте `{prefix}` в качестве префикса для команд.",
    NO_DESCRIPTION: "Описание отсутствует",
    GENERAL: "Основное",
    FUN: "Весёлости",
    MUSIC: "Музыка",
    NSFW: "NSFW",
    USEFUL: "Полезности",
    SETTINGS: "Настройки",
    NSFW_ONLY: "Этот канал не предназначен для такого контента!",
    OWNER_ONLY: "Эту команду может использовать только владелец!",
    CATEGORY: "Категория",
    ALIASES: "Алиасы",
    COOLDOWN: "Кулдаун",
    USAGE: "Использование",
    BOT_PERMS: "Права для бота",
    MEMBER_PERMS: "Права для участника",
    CMD_NOT_FOUND: "Команды **{command}** не существует!",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Создавать приглашения",
    KICK_MEMBERS: "Выгонять участников",
    BAN_MEMBERS: "Банить участников",
    ADMINISTRATOR: "Администратор",
    MANAGE_CHANNELS: "Управлять каналами",
    MANAGE_GUILD: "Управлять сервером",
    ADD_REACTIONS: "Добавлять реакции",
    VIEW_AUDIT_LOG: "Смотреть журнал аудита",
    PRIORITY_SPEAKER: "Приоритетный режим",
    STREAM: "Демонстрировать экран",
    VIEW_CHANNEL: "Просматривать каналы",
    SEND_MESSAGES: "Отправлять сообщения",
    SEND_TTS_MESSAGES: "Отправлять TTS-сообщения",
    MANAGE_MESSAGES: "Управлять сообщениями",
    EMBED_LINKS: "Встраивать ссылки",
    ATTACH_FILES: "Прикреплять файлы",
    READ_MESSAGE_HISTORY: "Читать историю сообщений",
    MENTION_EVERYONE: "Упоминать everyone",
    USE_EXTERNAL_EMOJIS: "Использовать внешние эмодзи",
    VIEW_GUILD_INSIGHTS: "Видеть статистику сервера",
    CONNECT: "Подключаться к голосовым каналам",
    SPEAK: "Говорить в голосовых каналах",
    MUTE_MEMBERS: "Отключать микрофон участников",
    DEAFEN_MEMBERS: "Отключать звук участников",
    MOVE_MEMBERS: "Перемещать участников",
    USE_VAD: "Использовать активацию по голосу",
    CHANGE_NICKNAME: "Изменять никнейм",
    MANAGE_NICKNAMES: "Управлять никнеймами",
    MANAGE_ROLES: "Управлять ролями",
    MANAGE_WEBHOOKS: "Управлять вебхуками",
    MANAGE_EMOJIS: "Управлять эмодзи",
  },
  DESCRIPTIONS: {
    HELP: "Показывает все команды или информацию о конкретной команде",
    NOWPLAYING: "Показывает текущий воспроизводимый трек.",
    PLAY: "Начинает играть музыку по запросу пользователя.",
    QUEUE: "Показывает очередь воспроизведения для данного сервера.",
    SKIP: "Пропускает текущий воспроизводимый трек.",
    PAUSE: "Ставит плеер на паузу.",
    RESUME: "Снимает плеер с паузы.",
    VOLUME: "Изменяет громкость плеера.",
  },
  MUSIC: {
    NOW_PLAYING: "Сейчас играет",
    UPLOADED_BY: "Загрузил",
    DURATION: "Длительность",
    VOLUME: "Громкость",
    PLAYBACK_PROGESS: "Прогресс воспроизведения",
    JOIN_ERROR: "При подключении к голосовому каналу произошла ошибка. Пожалуйста, попробуйте еще раз.",
    PROVIDE_SEARCH: "Пожалуйста, предоставьте поисковый запрос!",
    MUST_BE_IN_VC: "Вы должны быть в голосовом канале, чтобы использовать эту команду.",
    MUST_BE_IN_SAME_VC: "Вы должны находиться в том же голосовом канале, что и я.",
    FETCH_ERROR: "При получении трека произошла ошибка, пропускаю...",
    TRACK_UNAVAILABLE: "Этот трек в данный момент недоступен, повторите попытку позже.",
    CHANNEL_LEFT: "Уничтожил плеер и покинул голосовой канал.",
    INACTIVE_CHANNEL_LEFT: "Уничтожил плеер и покинул голосовой канал из-за неактивности.",
    QUEUE: "Очередь воспроизведения",
    EMPTY_QUEUE: "Очередь воспроизведения в настоящее время пуста.",
    QUEUED: "Добавлено в очередь на позицию №{pos}",
    PLAYLIST_ADDED: "Плейлист добавлен",
    QUEUE_ENDED: "Очередь воспроизведения закончилась. Покидаю голосовой канал.",
    STARTED_PLAYING: "Начато воспроизведение",
    SKIPPING: "Пропускаю **{track}**...",
    PAUSED: "Плеер был поставлен на паузу.",
    ALREADY_PAUSED: "Плеер уже на паузе.",
    NOT_PAUSED: "Плеер не на паузе.",
    RESUMED: "Плеер был снят с паузы. Сейчас играет **{track}**",
    STOPPED: "Воспроизведение музыки было остановлено.",
    NO_RESULTS: "Поиск по вашему запросу не дал никаких результатов.",
    TRACKS: "Треков",
    LAST_TRACK_IN_QUEUE: "Невозможно пропустить данный трек, так как он последний в очереди",
    TRACK_REQUESTED_BY_SOMEONE_ELSE: "Вы не можете пропустить трек, который запросил кто-то другой.",
    VOLUME_VALUE_LIMIT: "Значение громкости должно не быть меньше 0 и не превышать 200.",
    VOLUME_UPDATED: "Громкость плеера теперь {newVol}%.",
    CURRENT_VOLUME: "Текущая громкость плеера - {vol}%.",
    TRACK_STILL_STARTING: "Текущий трек еще загружается, пожалуйста, подождите..."
  },
  OTHER: {
    REQUESTED_BY: "Запросил",
    PROCESSING: "Ваш запрос обрабатывается, подождите...",
    GH_NOT_FOUND: "По Вашему запросу не было найдено ни одного аккаунта на GitHub.",
    GH_FOLLOWING: "Подписок",
    GH_FOLLOWERS: "Подписчиков",
    GH_REPOS: "Репозиториев",
    GH_WEBSITE: "Сайт",
    GH_LOCATION: "Локация",
    GH_JOB: "Организация",
    GH_BIO: "О себе",
    URL: "URL-адрес",
    CMD_DISABLED: "Команда **{command}** была выключена на данном сервере.",
    CALC: "Калькулятор",
    CALC_ERR: "При выполнении вычислений произошла ошибка.",
    STARBOARD_ENABLED: "Звездная доска успешно включена в канале {channel}",
    STARBOARD_DISABLED: "Звездная доска успешно отключена для канала {channel}",
    STARBOARD_NOT_ENABLED: "На этом сервере еще нет звездной доски.",
    STARBOARD_ALREADY_ENABLED: "На этом сервере уже есть звездная доска!",
    PROVIDE_LOCALE: "Пожалуйста, укажите локаль!",
    PROVIDE_OPTION: "Пожалуйста, предоставьте опцию! ({options})",
    PROVIDE_CHANNEL: "Пожалуйста, предоставьте канал!",
    LOCALE_NOT_AVAILABLE: "Эта локаль недоступна. Доступные локали:",
    LOCALES_LIST: "Доступные локали:",
    MUST_BE_A_NUMBER: "Ожидалось число на месте **{args}**.",
    MUST_BE_A_NATURAL_NUMBER: "На месте **{args}** ожидалось натуральное число.",
    MUST_BE_AN_INTEGER: "Ожидалось целое число, а не **{args}**.",
    INVALID_ARGS_LENGTH: "Неверная длина аргументов: ожидалось **{expected}**, получено **{args}**",
    ARGS_LENGTH_LIMIT: "Превышен лимит длины аргументов: максимум - **{max}**, получено **{got}**",
    ARGS_VALUE_MAX: "Значение аргументов выше максимума: максимум - **{max}**, получено **{got}**",
    ARGS_VALUE_MIN: "Значение аргументов ниже минимума: минимум - **{min}**, получено **{got}**",
  },
};
