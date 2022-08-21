import { Form, Input } from "antd";
import React from "react";

export const BetLeague = ({ isSport, isLang }) => {
  return (
    <Form.Item name={"league"} noStyle rules={[{ required: true }]}>
      <Input placeholder="Լիգա" style={{ width: "25%" }} />
    </Form.Item>
  );
};
