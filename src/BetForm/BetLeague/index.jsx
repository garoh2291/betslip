import { Form, Input } from "antd";
import React from "react";

export const BetLeague = ({ isSport, isLang }) => {
  return (
    <Form.Item name={"league"} noStyle rules={[{ required: true }]}>
      <Input placeholder="Write league" style={{ width: "34%" }} />
    </Form.Item>
  );
};
