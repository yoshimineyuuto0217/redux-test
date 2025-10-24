import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    task: {
      id: 1,
      title: "デフォルト",
      state: "テスト一番",
    },
    modal: {
      title: "モンハン",
      context: "キリン",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      id: 2,
      title: "ピンエンド",
      state: "テスト2番",
    },
    modal: {
      title: "モンハン",
      context: "リオレウス",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      id: 3,
      title: "アクティデート",
      state: "テスト3番",
    },
    modal:{
        title:"モンハン",
        context:"ババコンガ"
    }
  },
};

export const Professional = {
  args: {
    task: {
      ...Default.args.task,
      id: 4,
      title: "プロフェショナル",
      state: "テスト3番",
    },
    modal:{
        title:"モンハン",
        context:"リオレイア"
    }
  },
};
