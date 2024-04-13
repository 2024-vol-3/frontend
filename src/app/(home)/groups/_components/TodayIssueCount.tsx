import React from "react";
import { Text, Box } from "@yamada-ui/react";
type IssueCountType = {
  issue_count: number;
};

export const TodayIssueCount = (props: IssueCountType) => {
  return (
    <Text mt='-12px' isTruncated as='b' fontSize='20px' color='#999'>
      今日解く問題数： <span>{props.issue_count}</span>
    </Text>
  );
};
