/**
 * @ngdoc constant
 * @name superProductivity.Dialogs
 * @description
 * # Dialogs
 * Constant in the superProductivity.
 */

(function () {
  'use strict';

  angular
    .module('superProductivity')
    .constant('DEFAULT_THEME', 'teal-theme')
    .constant('LS_DEFAULTS', {
      theme: undefined,
      currentTask: undefined,
      currentProject: undefined,
      currentSession: {
        timeWorkedWithoutBreak: undefined
      },
      tasks: [],
      backlogTasks: [],
      distractions: [],
      projects: [],
      git: {
        projectDir: undefined
      },
      config: {
        isTakeABreakEnabled: false,
        takeABreakMinWorkingTime: undefined,
        isShortSyntaxEnabled: true
      },
      jiraSettings: {
        isFirstLogin: true,
        isWorklogEnabled: true,
        isAutoWorklog: false,
        isUpdateIssueFromLocal: false,
        isAddWorklogOnSubTaskDone: true,
        defaultTransitionInProgress: undefined,
        defaultTransitionDone: undefined,
        transitions: {
          OPEN: undefined,
          IN_PROGRESS: undefined,
          DONE: undefined
        }
      }
    })
    .constant('JIRA_UPDATE_POLL_INTERVAL', 60 * 1000 * 5)
    .constant('IS_ELECTRON', (typeof window.ipcRenderer !== 'undefined'))
    .constant('THEMES', [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
      ]
    )
})();