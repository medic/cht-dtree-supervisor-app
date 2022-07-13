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
    appliesToType: ['group_session'],
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
  },
  {
    id: 'households-all-time',
    type: 'count',
    goal: 2,
    translation_key: 'targets.households.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['clinic'],
    date: 'reported',
    aggregate: true
  },
  {
    id: 'population-all-time',
    type: 'count',
    goal: 2,
    translation_key: 'targets.population.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    date: 'reported',
    aggregate: true
  },
  {
    id: 'pregnancies-this-month',
    type: 'count',
    goal: -1,
    translation_key: 'targets.pregnancies_enrolled.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancy'],
    date: 'reported',
    aggregate: true
  }
];