import { Form, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { LEAGUE_DATA } from "../../data";

export const BetLeague = ({ isSport, isLang }) => {
  return (
    <Form.Item name={"league"} noStyle rules={[{ required: true }]}>
      <Input placeholder="Write league" style={{ width: "34%" }} />
    </Form.Item>
  );
};
