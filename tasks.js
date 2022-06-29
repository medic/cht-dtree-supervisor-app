module.exports = [
  {
    name: 'quality-monitoring-task',
    icon: 'general',
    title: 'task.quality_monitoring',
    appliesTo: 'reports',
    appliesIf: function() {
      return user.parent && user.parent.type === 'district_hospital';
    },
    appliesToType: ['quality_monitoring_planning'],
    actions: [ 
      { 
        type: 'report',
        form: 'quality_monitoring' 
      } 
    ],
    events: [
      {
        id: 'quality-monitoring-1',
        dueDate: function (event, contact, report) {
          let visitDate = '';
          if (report.fields 
            && report.fields.visit_details 
            && report.fields.visit_details.planned_visit_date) {
              visitDate = new Date(report.fields.visit_details.planned_visit_date);
            } else {
              visitDate = new Date();
            }
          return visitDate;
        },
        start: 2,
        end: 2,
      }
    ]
  },
  {
    name: 'shadowing-reminder-task',
    icon: 'general',
    title: 'task.shadowing_reminder',
    appliesTo: 'reports',
    appliesIf: function() {
      return user.parent && user.parent.type === 'health_center';
    },
    appliesToType: [ 'quality_monitoring_planning' ],
    actions: [ 
      { 
        type: 'report',
        form: 'shadowing_reminder',
        modifyContent: function(content, contact, report) {
          if (report.fields 
            && report.fields.visit_details 
            && report.fields.visit_details.planned_visit_date) {
            content.t_planned_visit_date = report.fields.visit_details.planned_visit_date;
          } else {
            content.t_planned_visit_date = 'the planned visit date.';
          }
        } 
      } 
    ],
    resolvedIf: function(contact, report, event, dueDate) {
      return Utils.isFormSubmittedInWindow(
        contact.reports, 
        'quality_monitoring',
        Utils.addDate(dueDate, -event.start).getTime(),
        Utils.addDate(dueDate,  event.end+1).getTime()
      );
    },
    events: [
      {
        id: 'shadowing-reminder-1',
        dueDate: function (report) {
          let visitDate = '';
          if (report.fields 
            && report.fields.visit_details 
            && report.fields.visit_details.planned_visit_date) {
              visitDate = new Date(report.fields.visit_details.planned_visit_date);
            } else {
              visitDate = new Date();
            }
          return visitDate;
        },
        start:2,
        end:2,
      }
    ]
  },
  {
    name: 'chw-monthly-meeting-task-1',
    icon: 'confirm-meeting',
    title: 'task.chw_monthly_meeting',
    appliesTo: 'reports',
    appliesToType: [ 'chw_monthly_meeting' ],
    appliesIf: function() {
      return user.parent && user.parent.type === 'district_hospital';
    },
    actions: [ 
      { 
        type: 'report',
        form: 'chw_monthly_meeting' 
      } 
    ],
    resolvedIf: function (contact) {
      let date = new Date();
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return Utils.isFormSubmittedInWindow(
        contact.reports,
        'chw_monthly_meeting',
        firstDay,
        lastDay
      );
    },
    events: [
      {
        id: 'chw-monthly-meeting-1',
        dueDate: function (report) {
          let meetingDate = '';
          if (report.fields 
            && report.fields.next_meeting_details 
            && report.fields.next_meeting_details.next_meeting_date) {
              meetingDate = new Date(report.fields.next_meeting_details.next_meeting_date);
            } else {
              meetingDate = new Date();
            }

          return meetingDate;
        },
        start:3,
        end:3,
      }
    ]
  },
  {
    name: 'chw-monthly-meeting-task-2',
    icon: 'confirm-meeting',
    title: 'task.chw_monthly_meeting',
    appliesTo: 'contacts',
    appliesToType: [ 'district_hospital' ],
    appliesIf: function() {
      return user.parent && user.parent.type === 'district_hospital';
    },
    actions: [ 
      { 
        type: 'report',
        form: 'chw_monthly_meeting' 
      } 
    ],
    resolvedIf: function (contact) {
      let date = new Date();
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return Utils.isFormSubmittedInWindow(
        contact.reports,
        'chw_monthly_meeting',
        firstDay,
        lastDay
      );
    },
    events: [
      {
        id: 'chw-monthly-meeting-1',
        dueDate: function () {
          let date = new Date();
          let meetingDate = new Date(date.getFullYear(), date.getMonth(), 3);
          return meetingDate;
        },
        start:3,
        end:3,
      }
    ]
  },
  {
    name: 'quality-monitoring-follow-up-task-1',
    icon: 'general',
    title: 'task.quality_monitoring_follow_up',
    appliesTo: 'reports',
    appliesIf: function (contact, report) {
      if (report.fields && 
        report.fields.group_summary && 
        report.fields.group_summary.follow_up_again) {
          return report.fields.group_summary.follow_up_again === 'yes' && user.parent && user.parent.type === 'district_hospital';
      }
      return false;
    },
    appliesToType: [ 'quality_monitoring' ],
    actions: [ 
      { 
        type: 'report',
        form: 'quality_monitoring_follow_up',
        modifyContent: function (content, contact, report) {
          content.t_follow_up_areas = '';
          if (report.fields && report.fields.c_follow_up_areas) {
            content.t_follow_up_areas = report.fields.c_follow_up_areas;
          }
        }
      } 
    ],
    events: [
      {
        id: 'quality-monitoring-follow-up-1',
        dueDate: function (event, contact, report) {
          if (report.fields && report.fields.group_summary && report.fields.group_summary.next_follow_up_date) {
            return new Date(report.fields.group_summary.next_follow_up_date);
          } else {
            return new Date();
          }
        },
        start:2,
        end:2,
      }
    ]
  },
  {
    name: 'quality-monitoring-follow-up-task-2',
    icon: 'general',
    title: 'task.quality_monitoring_follow_up',
    appliesTo: 'reports',
    appliesIf: function (contact, report) {
      return report.fields && report.fields.follow_up_details && report.fields.follow_up_details .follow_up_again === 'yes' && user.parent && user.parent.type === 'district_hospital';
    },
    appliesToType: [ 'quality_monitoring_follow_up' ],
    actions: [ 
      { 
        type: 'report',
        form: 'quality_monitoring_follow_up' 
      } 
    ],
    events: [
      {
        id: 'quality-monitoring-follow-up-1',
        dueDate: function (event, contact, report) {
          if (report.fields && report.fields.follow_up_details && report.fields.follow_up_details.next_follow_up_date) {
            return new Date(report.fields.follow_up_details.next_follow_up_date);
          } else {
            return new Date();
          }
        },
        start:2,
        end:2,
      }
    ]
  }/*,
  // This won't work on < 3.14
  {
    name: 'chw-activity-task-1',
    icon: 'risk',
    title: 'task.chw_activity',
    appliesTo: 'contacts',
    appliesToType: [ 'person' ],
    appliesIf: function (contact) {
      const oneDay = 24 * 60 * 60 * 1000;
      let mostRecentReportDate = new Date(Utils.getMostRecentTimestamp(contact.reports, [
          'quality_monitoring',
          'quality_monitoring_planning',
          'chv_quality_monitoring',
          'chv_youth_peer_education', 
          'confirm_meeting', 
          'covid_education',
          'death_report',
          'group_counseling', 
          'infant_child',
          'mute_person',
          'peer_mentor_checklist', 
          'pregnancy', 
          'pregnancy_counselling', 
          'pregnancy_outcomes',
          'postpartum',
          'referral_follow_up',
          'unmute_person',
          'wash_protocol'
        ]));
      let diffDays = Math.round(Math.abs((mostRecentReportDate - Utils.now()) / oneDay));
      return diffDays >= 91 && user.parent && user.parent.type === 'district_hospital';
    },
    actions: [ 
      { 
        type: 'report',
        form: 'chw_activity' 
      } 
    ],
    events: [
      {
        id: 'chw-activity-1',
        dueDate: function () {
          return new Date();
        },
        start:0,
        end:3,
      }
    ]
  }*/
];