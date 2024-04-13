import { fetchIssueResponse } from "@/api/interface/issueInterface";

export const testIssue: fetchIssueResponse[] = [
  {
    issue_id: 1,
    title:
      "事業の中断・阻害に対応し，事業を復旧し，再開し，あらかじめ定められたレベルに回復するように組織を導く手順を文書化したもの",
    contents: "BCP",
    day_fragment: true,
    group_id: 1,
    paper_num: 2,
  },
  {
    issue_id: 2,
    title:
      "デジタル空間に現実世界と同等な世界を，様々なセンサーで収集したデータを用いて構築し，現実世界では実施できないようなシミュレーションを行うこと",
    contents: "デジタルツイン",
    day_fragment: true,
    group_id: 1,
    paper_num: 1,
  },
  {
    issue_id: 3,
    title:
      "事業の中断・阻害に対応し，事業を復旧し，再開し，あらかじめ定められたレベルに回復するように組織を導く手順を文書化したものは？",
    contents: "BCP",
    day_fragment: true,
    group_id: 1,
    paper_num: 4,
  },
  {
    issue_id: 4,
    title:
      "事業の中断・阻害に対応し，事業を復旧し，再開し，あらかじめ定められたレベルに回復するように組織を導く手順を文書化したものは？",
    contents: "BCP",
    day_fragment: true,
    group_id: 1,
    paper_num: 3,
  },
  {
    issue_id: 5,
    title:
      "事業の中断・阻害に対応し，事業を復旧し，再開し，あらかじめ定められたレベルに回復するように組織を導く手順を文書化したものは？",
    contents: "BCP",
    day_fragment: true,
    group_id: 1,
    paper_num: 3,
  },
];

export const testGroup = [
  {
    group_id: 1,
    group_name: "基本情報対策",
    group_description: "基本情報科目A過去問から",
    issue_count: 2,
  },
  {
    group_id: 2,
    group_name: "Python",
    group_description: "Pythonの基本的な構文",
    issue_count: 3,
  },
  {
    group_id: 3,
    group_name: "ネットワーク",
    group_description: "ネットワークのテスト対策",
    issue_count: 4,
  },
  {
    group_id: 4,
    group_name: "応用情報対策",
    group_description: "応用情報午前から",
    issue_count: 2,
  },
  {
    group_id: 5,
    group_name: "SQL",
    group_description: "SQLの小テスト対策",
    issue_count: 4,
  },
];
