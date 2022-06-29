module.exports = [
  {
    id: 'monthly-meetings-this-month',
    type: 'count',
    goal: 1,
    translation_key: 'targets.monthly_meetings.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['chw_monthly_meeting'],
    appliesIf: function (contact, report) {
      if (report.fields && report.fields.planned_meeting && report.fields.planned_meeting.meeting_option) {
        return report.fields.planned_meeting.meeting_option === 'now';
      }
      return false;
    },
    date: 'reported'
  },
  {
    id: 'group-sessions-this-month',
    type: 'count',
    goal: 1,
    translation_key: 'targets.group_sessions.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['group_sessions'],
    date: 'reported'
  },
  {
    id: 'quality-monitoring-this-month',
    type: 'count',
    goal: 1,
    translation_key: 'targets.quality_monitoring.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['quality_monitoring'],
    date: 'reported'
  }
];