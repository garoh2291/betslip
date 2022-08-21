import React, { useContext } from "react";
import "./styles.css";
import { Button, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { useState } from "react";
import { GameContext } from "../context";
import { Typography } from "antd";
import { uid } from "../helpers";

const { Title } = Typography;

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
      id: uid(),
      sport: isSport,
      league: {
        arm: values.leagueAm,
        ru: values.leagueRu,
        en: values.leagueEn,
      },
      team1: {
        arm: values.team1Am,
        ru: values.team1Ru,
        en: values.team1En,
      },
      team2: {
        arm: values.team2Am,
        ru: values.team2Ru,
        en: values.team2En,
      },
      bet: {
        arm: values.betAm,
        ru: values.betRu,
        en: values.betEn,
      },
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
              style={{ width: "25%" }}
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
              style={{ width: "25%" }}
              inputReadOnly={true}
            />
          </Form.Item>
          <Form.Item name={"time"} noStyle rules={[{ required: true }]}>
            <TimePicker
              format={format}
              onChange={onTimeChange}
              style={{ width: "25%" }}
              inputReadOnly={true}
            />
          </Form.Item>
          <Form.Item name={"sport"} noStyle rules={[{ required: true }]}>
            <Select
              placeholder="Select Sport"
              style={{ width: "25%" }}
              onChange={onSportChange}
            >
              <Option value="football">Football</Option>
              <Option value="volleyball">Volleyball</Option>
              <Option value="basketball">BasketBall</Option>
              <Option value="regby">Regby</Option>
              <Option value="tennis">Tennis</Option>
              <Option value="tabbleTennis">Table Tennis</Option>
              <Option value="hockey">Hockey</Option>
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item>
          <Title level={5} style={{ textAlign: "center" }}>
            Հայերեն
          </Title>
          <Input.Group compact>
            {/* <BetLeague isSport={isSport} isLang={isLang} /> */}
            <Form.Item name={"leagueAm"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Լիգա" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team1Am"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Թիմ 1" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team2Am"} noStyle rules={[{ required: true }]}>
              <Input placeholder=" Թիմ 2" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"betAm"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Դիրք" style={{ width: "25%" }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Title level={5} style={{ textAlign: "center" }}>
            Русский
          </Title>
          <Input.Group compact>
            <Form.Item name={"leagueRu"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Лига" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team1Ru"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Команда 1" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team2Ru"} noStyle rules={[{ required: true }]}>
              <Input placeholder=" Команда 2" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"betRu"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Позиция" style={{ width: "25%" }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Title level={5} style={{ textAlign: "center" }}>
            English
          </Title>
          <Input.Group compact>
            <Form.Item name={"leagueEn"} noStyle rules={[{ required: true }]}>
              <Input placeholder="League" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team1En"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Team 1" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"team2En"} noStyle rules={[{ required: true }]}>
              <Input placeholder=" Team 2" style={{ width: "25%" }} />
            </Form.Item>
            <Form.Item name={"betEn"} noStyle rules={[{ required: true }]}>
              <Input placeholder="Position" style={{ width: "25%" }} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item>
          <Input.Group compact>
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
              <Input placeholder="Գործակից" style={{ width: "25%" }} />
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
