const
    minutesInHour = 60,
    secondsInMinute = 60,
    msInSecond = 1000;

class Duration extends Date {
    static fromSeconds(secs) {
        // const date = new Date();
        // date.setSeconds(secs);
        return new Date(secs *
            msInSecond);
    }

    static fromMinutes(min) {
        return new Date(min *
            secondsInMinute *
            msInSecond);
    }

    static fromHours(hours) {
        return new Date(hours *
            minutesInHour *
            secondsInMinute *
            msInSecond);
    }

    millis() {
        return this.valueOf();
    }
}
