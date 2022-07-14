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
      return report.fields && 
        report.fields.planned_meeting && 
        report.fields.planned_meeting.meeting_option && 
        report.fields.planned_meeting.meeting_option === 'now';
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
    id: 'household-visits',
    type: 'count',
    goal: 16,
    translation_key: 'targets.household_visits.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['infant_child', 'pregnancy'],
    date: 'reported',
    aggregate: true
  },
  {
    id: 'households-all-time',
    type: 'count',
    goal: 130,
    translation_key: 'targets.households.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['clinic'],
    date: 'now',
    aggregate: true
  },
  {
    id: 'population-all-time',
    type: 'count',
    goal: 730,
    translation_key: 'targets.population.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'contacts',
    appliesToType: ['person'],
    date: 'now',
    aggregate: true
  },
  {
    id: 'under-5-population',
    type: 'count',
    goal: 2,
    translation_key: 'targets.under_5_enrolled.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['infant_child'],
    date: 'now',
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
  },
  {
    id: 'home-maternal-deaths-this-month',
    type: 'count',
    goal: -1,
    translation_key: 'targets.home_maternal_deaths.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['death_report'],
    appliesIf: function(contact, report) {
      return report.fields &&
        report.fields.suspected_maternal_death &&
        report.fields.suspected_maternal_death.where_death === 'home';
    },
    date: 'reported',
    aggregate: true
  },
  {
    id: 'facility-maternal-deaths-this-month',
    type: 'count',
    goal: -1,
    translation_key: 'targets.facility_maternal_deaths.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['death_report'],
    appliesIf: function(contact, report) {
      return report.fields &&
        report.fields.suspected_maternal_death &&
        report.fields.suspected_maternal_death.where_death === 'health_facility';
    },
    date: 'reported',
    aggregate: true
  }
];