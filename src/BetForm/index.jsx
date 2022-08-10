import React, { useContext } from "react";
import "./styles.css";
import { Button, Form, Input, Select } from "antd";
import { BetLeague } from "./BetLeague";
import { useState } from "react";
import { GameContext } from "../context";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 24,
  },
};

export const BetForm = ({ setBetSlipOpenHandler, language }) => {
  const { setBetGames } = useContext(GameContext);
  const [isSport, setIsSport] = useState("football");
  const [isLang, setIsLang] = useState("en");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newBet = {
      sport: values.sport,
      league: values.league,
      event: `${values.team1} - ${values.team2}`,
      bet: values.bet,
      cf: parseFloat(values.cf),
    };

    setBetGames((prev) => {
      return [...prev, newBet];
    });

    setBetSlipOpenHandler(values.language);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onLangChange = (e) => {
    setIsLang(e);
  };

  const onSportChange = (e) => {
    console.log(e);
    setIsSport(e);
  };
  return (
    <div className="bet_form_wrapper">
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item>
          <Input.Group compact>
            <Form.Item name={"language"} noStyle rules={[{ required: true }]}>
              <Select
                placeholder="Select Language"
                style={{ width: "33%" }}
                onChange={onLangChange}
              >
                <Option value="arm">Armenian</Option>
                <Option value="ru">Russian</Option>
                <Option value="en">English</Option>
              </Select>
            </Form.Item>
            <Form.Item name={"sport"} noStyle rules={[{ required: true }]}>
              <Select
                placeholder="Select Sport"
                style={{ width: "33%" }}
                onChange={onSportChange}
              >
                <Option value="football" default>
                  Football
                </Option>
                <Option value="basketball">Basketball</Option>
                <Option value="handball">Handball</Option>
                <Option value="regby">Regby</Option>
                <Option value="tennis">Tennis</Option>
                <Option value="tabbleTennis">Table Tennis</Option>
                <Option value="hockey">Hockey</Option>
              </Select>
            </Form.Item>
            <BetLeague isSport={isSport} isLang={isLang} />
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Input.Group compact>
            <Form.Item name={"team1"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Write Team 1" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team2"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Write Team 2" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"bet"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Write Bet" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"cf"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Write coefficent" style={{ width: "25%" }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
