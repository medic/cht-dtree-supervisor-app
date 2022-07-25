const NOW = new Date();
const CURRENT_MONTH = NOW.getMonth();
const CURRENT_YEAR = NOW.getFullYear();

module.exports = {
  CURRENT_MONTH: CURRENT_MONTH,
  CURRENT_YEAR: CURRENT_YEAR,
  getNewestReport: function (reports, form) {
    let newestReport;
    let currentReport;
    for (let i = 0; i < reports.length; i++) {
      currentReport = reports[i];
      if (!newestReport && currentReport.form === form) {
        newestReport = currentReport;
        continue;
      }
      if (currentReport.form === form && (newestReport.reported_date < currentReport.reported_date)) {
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