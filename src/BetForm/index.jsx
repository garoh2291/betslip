import React, { useContext } from "react";
import "./styles.css";
import { Button, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { BetLeague } from "./BetLeague";
import { useState } from "react";
import { GameContext } from "../context";
const format = "HH:mm";

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

export const BetForm = ({
  setBetSlipOpenHandler,
  setBetslipLanguage,
  setIsSlipPromoActive,
  setIsDate,
  setIsTime,
  isSlipActive,
}) => {
  const { betGames, setBetGames } = useContext(GameContext);
  const [isSport, setIsSport] = useState("football");
  const [isLang, setIsLang] = useState("en");
  const [form] = Form.useForm();

  const onDateChange = (date, dateString) => {
    console.log(dateString);
    setIsDate(dateString);
  };

  const isDisabled = (games) => {
    if (games.length === 0) {
      return true;
    }
    return false;
  };

  const onTimeChange = (time, timeString) => {
    console.log(timeString);
    setIsTime(timeString);
  };

  const onFinish = (values) => {
    const newBet = {
      sport: values.sport,
      league: values.league,
      team1: values.team1,
      team2: values.team2,
      bet: values.bet,
      cf: parseFloat(values.cf),
    };

    setBetGames((prev) => {
      return [...prev, newBet];
    });

    setIsSlipPromoActive(true);
    setBetSlipOpenHandler(true);
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
    setBetSlipOpenHandler("", false);
    setBetGames("");
  };

  const onLangChange = (e) => {
    console.log(e);
    setIsLang(e);
    setBetslipLanguage(e);
  };

  const onSportChange = (e) => {
    console.log(e);
    setIsSport(e);
  };
  return (
    <div className="bet_form_wrapper">
      <Form.Item>
        <Input.Group compact>
          <Form.Item name={"language"} noStyle rules={[{ required: true }]}>
            <Select
              placeholder="Select Language"
              style={{ width: "34%" }}
              onChange={onLangChange}
            >
              <Option value="arm">Armenian</Option>
              <Option value="ru">Russian</Option>
              <Option value="en">English</Option>
            </Select>
          </Form.Item>
          <Form.Item name={"date"} noStyle rules={[{ required: true }]}>
            <DatePicker
              onChange={onDateChange}
              format="DD MM YYYY"
              style={{ width: "33%" }}
              inputReadOnly={true}
              // defaultValue={moment()}
            />
          </Form.Item>
          <Form.Item name={"time"} noStyle rules={[{ required: true }]}>
            <TimePicker
              // defaultValue={moment("12:08", format)}
              format={format}
              onChange={onTimeChange}
              style={{ width: "33%" }}
              inputReadOnly={true}
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item>
          <Input.Group compact>
            <Form.Item name={"sport"} noStyle rules={[{ required: true }]}>
              <Select
                placeholder="Select Sport"
                style={{ width: "50%" }}
                onChange={onSportChange}
              >
                <Option value="football" default>
                  Football
                </Option>
                <Option value="volleyball">Volleyball</Option>
                <Option value="basketball">BasketBall</Option>
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
            <Form.Item
              name={"cf"}
              noStyle
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/),
                },
              ]}
            >
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
          <Button
            disabled={isDisabled(betGames)}
            onClick={() => setIsSlipPromoActive((prev) => !prev)}
          >
            {isSlipActive ? "Show Promo" : "Show Bet"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
