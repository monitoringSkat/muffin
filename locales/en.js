module.exports = {
  GLOBAL: {
    ERROR: "An unexpected error has occured.",
    NOTHING: "There is nothing here right now.",
    NONE: "None",
    NOT_SPECIFIED: "Not specified",
    NOT_AVAILABLE: "Not available",
    SERVER_PREFIX: "Server prefix",
    PROVIDE_ARGS: "Please provide some arguments!",
    LONG_ARGS: "The arguments provided are too long! ({length} > {limit})",
  },
  BOT: {
    ABOUT: "About smiley",
    GENERAL_INFO: "General information",
    DEVELOPER: "Developer",
    PLATFORM: "Platform",
    LATENCY: "Latency",
    SHARDS: "Shards",
    SERVERS: "Servers",
    USERS: "Users",
    COMMANDS: "Commands",
    VOICE_CONNECTIONS: "Voice connections",
    USEFUL_LINKS: "Useful links",
    SUPPORT_SERVER: "Support server",
    ADD: "Click here to add me",
    SOURCE_CODE: "Source code",
    USED_APIS: "Used APIs",
    VOTE: "Vote for me",
    ACKNOWLEDGMENTS: "Acknowlegdements",
    NO_PERMS: "It seems to me that I don't have some permissions in order to work properly.\nPlease kick & re-invite me using this link:\n{link}",
    NEED_PERMS: "I need more permissions to execute this command: {neededPermissions}",
  },
  MEMBER: {
    COOLDOWN: "Please wait **{cooldown}** more seconds before using the `{cmd}` command again.",
    BLACKLISTED: "You've been blacklisted from using this bot.",
    NO_PERMS: "Sorry, you don't have the correct permissions for this command.",
    NEED_PERMS: "You need more permissions to execute this command: {neededPermissions}",
  },
  GUILD: {
    NOT_FOUND: "Guild not found.",
    LEFT: "I've successfully left the **{guild}** guild.",
  },
  IMAGE: {
    FAILED_TO_LOAD: "Click here if the image failed to load.",
  },
  LANG: {
    PROVIDE_LANG: "Please provide a language!",
    NOT_AVAILABLE: "This language is not available. Available languages:",
    LIST: "Available languages:",
    UPDATED: "Successfully updated language to **{language}**!",
  },
  TIME: {
    DAYS: "days",
    HOURS: "hrs",
    MINUTES: "mins",
    SECONDS: "secs",
    MILLISECONDS: "ms",
  },
  HELP: {
    HELP: "List of commands",
    HELP_DESC: "Use `{prefix}` as a server prefix.",
    NO_DESCRIPTION: "Description missing",
    GENERAL: "General",
    FUN: "Fun",
    MUSIC: "Music",
    NSFW: "NSFW",
    USEFUL: "Useful",
    SETTINGS: "Settings",
    NSFW_ONLY: "This channel is not suitable for this kind of content!",
    OWNER_ONLY: "This command can be used only by the owner!",
    CATEGORY: "Category",
    ALIASES: "Aliases",
    COOLDOWN: "Cooldown",
    USAGE: "Usage",
    BOT_PERMS: "Bot Permissions",
    MEMBER_PERMS: "Member Permissions",
    CMD_NOT_FOUND: "There is no command named **{command}**!",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Create invites",
    KICK_MEMBERS: "Kick members",
    BAN_MEMBERS: "Ban members",
    ADMINISTRATOR: "Administrator",
    MANAGE_CHANNELS: "Manage channels",
    MANAGE_GUILD: "Manage server",
    ADD_REACTIONS: "Add reactions",
    VIEW_AUDIT_LOG: "View audit logs",
    PRIORITY_SPEAKER: "Use Priority speaker",
    STREAM: "Go live",
    VIEW_CHANNEL: "View channel",
    SEND_MESSAGES: "Send messages",
    SEND_TTS_MESSAGES: "Send TTS-messages",
    MANAGE_MESSAGES: "Manage messages",
    EMBED_LINKS: "Embed links",
    ATTACH_FILES: "Attach files",
    READ_MESSAGE_HISTORY: "Read message history",
    MENTION_EVERYONE: "Mention everyone",
    USE_EXTERNAL_EMOJIS: "Use external emojis",
    VIEW_GUILD_INSIGHTS: "View server insights",
    CONNECT: "Join voice",
    SPEAK: "Speak in voice",
    MUTE_MEMBERS: "Mute members",
    DEAFEN_MEMBERS: "Deafen members",
    MOVE_MEMBERS: "Move members",
    USE_VAD: "Use voice activity detection",
    CHANGE_NICKNAME: "Change nickname",
    MANAGE_NICKNAMES: "Manage nicknames",
    MANAGE_ROLES: "Manage roles",
    MANAGE_WEBHOOKS: "Manage webhooks",
    MANAGE_EMOJIS: "Manage emojis",
  },
  DESCRIPTIONS: {
    HELP: "Shows all commands or shows information about a specific command",
    NOWPLAYING: "Shows currently playing track.",
    PLAY: "Начинает играть музыку по запросу пользователя.",
    QUEUE: "Показывает очередь воспроизведения для данного сервера.",
    SKIP: "Пропускает текущий воспроизводимый трек.",
    PAUSE: "Pauses the player.",
    RESUME: "Unpauses the player.",
    VOLUME: "Changes the player volume.",
  },
  MUSIC: {
    NOW_PLAYING: "Now playing",
    UPLOADED_BY: "Uploaded by",
    DURATION: "Duration",
    VOLUME: "Volume",
    PLAYBACK_PROGESS: "Playback progess",
    JOIN_ERROR: "An error has occured while joining the voice channel. Please try again.",
    PROVIDE_SEARCH: "Please provide a search query!",
    LIVE_NOT_SUPPORTED: "Unfortunately, playing live streams is not supported.",
    MUST_BE_IN_VC: ":warning: You must be in a voice channel to use this command.",
    CHANNEL_LEFT: "I've left the voice channel due to inactivity.",
    QUEUE: "Playback queue",
    EMPTY_QUEUE: "Playback queue is currently empty.",
    ADDED_TO_QUEUE: "Added to queue",
    QUEUE_ENDED: "Playback queue has ended. Leaving the voice channel.",
    STARTED_PLAYING: "Started playing",
    SKIPPING: "Skipping **{track}**...",
    PAUSED: "Player has been paused.",
    ALREADY_PAUSED: "The player is already paused.",
    NOT_PAUSED: "The player is not paused.",
    RESUMED: "Player has been unpaused. Currently playing **{track}**",
    STOPPED: "Music playback was stopped.",
    NO_RESULTS: "No results were found for your query.",
    TRACKS: "Tracks",
    TRACK_CANNOT_BE_SKIPPED: "This track cannot be skipped as it's last in the queue",
  },
  OTHER: {
    REQUESTED_BY: "Requested by",
    GOOGLE_SEARCH: "Google Search",
    PREFIX_UPDATE: "Use `{cmd}` to set a new prefix",
    PROCESSING: "Your request is processing, please wait...",
    EVAL: "Eval",
    GH_NOT_FOUND: "No GitHub accounts were found for your query.",
    GH_FOLLOWING: "Following",
    GH_FOLLOWERS: "Followers",
    GH_REPOS: "Repositories",
    GH_WEBSITE: "Website",
    GH_LOCATION: "Location",
    GH_JOB: "Organization",
    GH_BIO: "Bio",
    URL: "URL",
    CMD_DISABLED: "The **{command}** command was disabled on this server.",
    CALC: "Calculator",
    CALC_ERR: "An error has occurred while performing the calculations.",
    MUST_BE_A_NUMBER: "There must be a number instead of **{args}**!",
    MUST_BE_A_NATURAL_NUMBER: "A natural number was expected instead of **{args}**.",
    MUST_BE_AN_INTEGER: "Maybe you should type an integer rather than **{args}**?",
    INVALID_ARGS_LENGTH: "Invalid arguments length: expected **{expected}**, got **{args}**",
    ARGS_LENGTH_LIMIT: "Arguments length limit exceeded: maximum is **{max}**, got **{got}**",
    ARGS_VALUE_MAX: "Arguments value exceeds the maximum: maximum is **{max}**, got **{got}**",
    ARGS_VALUE_MIN: "Arguments value below the minimum: minimum is **{min}**, got **{got}**",
  },
};
