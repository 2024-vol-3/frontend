import React from "react";

type IssueCountType = {
  issue_count: number;
};

export const TodayIssueCount = (props: IssueCountType) => {
  return (
    <div>
      <p>
        今日解く問題数： <span>{props.issue_count}</span>
      </p>
    </div>
  );
};
