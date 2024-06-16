class AppConfig {
    public leaderboardUrl = 'http://localhost:8082/api/leaderboard';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;