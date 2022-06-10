const NOW = new Date();
const CURRENT_MONTH = NOW.getMonth();
const CURRENT_YEAR = NOW.getFullYear();

module.exports = {
  getNewestReport: function (reports, form) {
    let newestReport;
    let currentReport;
    for (let i = 1; i < reports.length; i++) {
      currentReport = reports[i];
      if (currentReport.form === form 
        && (!newestReport || newestReport.reported_date < currentReport.reported_date)) {
        newestReport = currentReport;
      }
    }
    return newestReport;
  },
  getReportsThisMonth: function (reports, form) {
    let reportsThisMonth = [];
    let reportedDate;

    for (const report of reports) {
      reportedDate = new Date(report.reported_date);
      if (report.form === form 
        && reportedDate.getMonth() === CURRENT_MONTH 
        && reportedDate.getFullYear() === CURRENT_YEAR) {
        reportsThisMonth.push(report);
      }
    }

    return reportsThisMonth;
  }
};