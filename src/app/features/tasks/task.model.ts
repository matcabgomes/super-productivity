import { IssueData, IssueProviderKey } from '../issue/issue';

export type DropListModelSource = 'UNDONE' | 'DONE' | 'BACKLOG';

export type TimeSpentOnDay = Readonly<{
  [key: string]: number;
}>;

export interface TaskCopy {
  id: string;
  title: string;

  subTaskIds: string[];
  timeSpentOnDay: TimeSpentOnDay;
  timeSpent: number;
  timeEstimate: number;

  created: number;
  isDone: boolean;

  notes: string;
  issueId: string;
  issueType: IssueProviderKey;
  parentId: string;
  attachmentIds: string[];

  // ui model
  _isAdditionalInfoOpen: boolean;
  // 0: show, 1: hide-done tasks, 2: hide all sub tasks
  _showSubTasksMode: number;
  _currentTab: number;
}

export type Task = Readonly<TaskCopy>;

export interface TaskWithIssueData extends Task {
  readonly issueData?: IssueData;
}

export interface TaskWithSubTasks extends TaskWithIssueData {
  readonly subTasks?: TaskWithIssueData[];
}

export const HIDE_SUB_TASKS = 0;
export const HIDE_DONE_SUB_TASKS = 1;
export const SHOW_SUB_TASKS = 2;

export const DEFAULT_TASK: Task = {
  id: null,
  subTaskIds: [],
  attachmentIds: [],
  timeSpentOnDay: {},
  timeSpent: 0,
  timeEstimate: 0,
  isDone: false,
  title: '',
  notes: '',
  parentId: null,
  issueId: null,
  issueType: null,
  created: Date.now(),
  _isAdditionalInfoOpen: false,
  _showSubTasksMode: SHOW_SUB_TASKS,
  _currentTab: 0,
};

