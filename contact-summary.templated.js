let extras = require('/contact-summary-extras.js');

const allReports = reports;

const cards = [
  {
    label: 'contact.profile.performance.monthly_meeting',
    appliesToType: 'report',
    appliesIf: (report) => {
      if(report.form === 'chw_monthly_meeting') {
        const monthlyMeetingForm = extras.getNewestReport(allReports, 'chw_monthly_meeting');
        return monthlyMeetingForm.reported_date >= report.reported_date;
      }
      return false;
    },
    fields: [
      {
        label: 'contact.profile.performance.monthly_meeting.goal',
        value: (report) => {
          const reportedDate = new Date(report.reported_date);
          if (reportedDate.getMonth === extras.CURRENT_MONTH && reportedDate.getFullYear === extras.CURRENT_YEAR) {
            const reportsThisMonth = extras.getReportsThisMonth(allReports, 'chw_monthly_meeting');
            const numberOfReportsThisMonth = reportsThisMonth.length;
            const completionPercentage = numberOfReportsThisMonth * 100;
            return `${completionPercentage}% (${numberOfReportsThisMonth} out of 1)`;
          }
          return '0% (0 out of 1)';
        },
        width: 6
      },
      {
        label: 'contact.profile.performance.monthly_meeting.last_date',
        value: (report) => {
          return report.reported_date;
        },
        filter: 'simpleDate',
        width: 6
      }
    ]
  },
  {
    label: 'contact.profile.performance.group_session',
    appliesToType: 'report',
    appliesIf: (report) => {
      if (report.form === 'group_session') {
        const groupSessionForm = extras.getNewestReport(allReports, 'group_session');
        return groupSessionForm.reported_date >= report.reported_date;
      }
      return false;
    },
    fields: [
      {
        label: 'contact.profile.performance.group_session.goal',
        value: (report) => {
          const reportedDate = new Date(report.reported_date);
          if (reportedDate.getMonth === extras.CURRENT_MONTH && reportedDate.getFullYear === extras.CURRENT_YEAR) {
            const reportsThisMonth = extras.getReportsThisMonth(allReports, 'group_session');
            const numberOfReportsThisMonth = reportsThisMonth.length;
            const completionPercentage = numberOfReportsThisMonth * 100;
            return `${completionPercentage}% (${numberOfReportsThisMonth} out of 1)`;
          }
          return '0% (0 out of 1)';
        },
        width: 6
      },
      {
        label: 'contact.profile.performance.group_session.last_date',
        value: (report) => {
          return report.reported_date;
        },
        filter: 'simpleDate',
        width: 6
      }
    ]
  },
  {
    label: 'contact.profile.performance.quality_monitoring',
    appliesToType: 'report',
    appliesIf: (report) => {
      if (report.form === 'quality_monitoring') {
        const qualityMonitoringForm = extras.getNewestReport(allReports, 'quality_monitoring');
        return qualityMonitoringForm.reported_date >= report.reported_date;
      }
      return false;
    },
    fields: [
      {
        label: 'contact.profile.performance.quality_monitoring.goal',
        value: (report) => {
          const reportedDate = new Date(report.reported_date);
          if (reportedDate.getMonth === extras.CURRENT_MONTH && reportedDate.getFullYear === extras.CURRENT_YEAR) {
            const reportsThisMonth = extras.getReportsThisMonth(allReports, 'quality_monitoring');
            const numberOfReportsThisMonth = reportsThisMonth.length;
            const completionPercentage = numberOfReportsThisMonth * 100;
            return `${completionPercentage}% (${numberOfReportsThisMonth} out of 1)`;
          }
          return '0% (0 out of 1)';
        },
        width: 6
      },
      {
        label: 'contact.profile.performance.quality_monitoring.last_date',
        value: (report) => {
          return report.reported_date;
        },
        filter: 'simpleDate',
        width: 6
      }
    ]
  }
];

module.exports = {
  cards: cards
};