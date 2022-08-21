import React, { useContext, useState } from "react";
import { Button, Modal, Typography } from "antd";
import { Form, FormGroup, Input } from "reactstrap";
import { GameContext } from "../context";

const { Title } = Typography;

export const EditModal = ({ onClose, editGame }) => {
  const { betGames, setBetGames } = useContext(GameContext);
  const { id } = editGame;

  const [inputsData, setInputsData] = useState({
    cf: {
      value: editGame.cf,
    },
    betArm: {
      value: editGame.bet.arm,
    },
    betRu: {
      value: editGame.bet.ru,
    },
    betEn: {
      value: editGame.bet.en,
    },
    team1Arm: {
      value: editGame.team1.arm,
    },
    team1Ru: {
      value: editGame.team1.ru,
    },
    team1En: {
      value: editGame.team1.en,
    },
    team2Arm: {
      value: editGame.team2.arm,
    },
    team2Ru: {
      value: editGame.team2.ru,
    },
    team2En: {
      value: editGame.team2.en,
    },
    sport: {
      value: editGame.sport,
    },
    leagueArm: {
      value: editGame.league.arm,
    },
    leagueRu: {
      value: editGame.league.ru,
    },
    leagueEn: {
      value: editGame.league.en,
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {
      cf: { value: cf },
      betArm: { value: betArm },
      betRu: { value: betRu },
      betEn: { value: betEn },
      team1Arm: { value: team1Arm },
      team1Ru: { value: team1Ru },
      team1En: { value: team1En },
      team2Arm: { value: team2Arm },
      team2Ru: { value: team2Ru },
      team2En: { value: team2En },
      sport: { value: sport },
      leagueArm: { value: leagueArm },
      leagueRu: { value: leagueRu },
      leagueEn: { value: leagueEn },
    } = inputsData;

    const modifiedGame = {
      cf: parseFloat(cf),
      id,
      sport,
      bet: {
        arm: betArm,
        ru: betRu,
        en: betEn,
      },
      league: {
        arm: leagueArm,
        ru: leagueRu,
        en: leagueEn,
      },
      team1: {
        arm: team1Arm,
        ru: team1Ru,
        en: team1En,
      },
      team2: {
        arm: team2Arm,
        ru: team2Ru,
        en: team2En,
      },
    };

    setBetGames((prev) => {
      return prev.map((game) => {
        if (game.id === modifiedGame.id) {
          return modifiedGame;
        }
        return game;
      });
    });
    onClose();
  };

  return (
    <Modal title="Basic Modal" visible={true} onOk={onClose} onCancel={onClose}>
      <Form onSubmit={onSubmit}>
        <Title level={5} style={{ textAlign: "center" }}>
          Հայերեն
        </Title>
        <FormGroup>
          <Input
            value={inputsData.leagueArm.value}
            id="leagueArm"
            name="leagueArm"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Լիգա"
          />

          <Input
            value={inputsData.team1Arm.value}
            id="team1Arm"
            name="team1Arm"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Թիմ 1"
          />

          <Input
            value={inputsData.team2Arm.value}
            id="team2Arm"
            name="team2Arm"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Թիմ 2"
          />

          <Input
            value={inputsData.betArm.value}
            id="betArm"
            name="betArm"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Դիրք"
          />
        </FormGroup>
        <Title level={5} style={{ textAlign: "center" }}>
          Русский
        </Title>
        <FormGroup>
          <Input
            value={inputsData.leagueRu.value}
            id="leagueRu"
            name="leagueRu"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Лига"
          />

          <Input
            value={inputsData.team1Ru.value}
            id="team1Ru"
            name="team1Ru"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Команда 1"
          />

          <Input
            value={inputsData.team2Ru.value}
            id="team2Ru"
            name="team2Ru"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Команда 2"
          />

          <Input
            value={inputsData.betRu.value}
            id="betRu"
            name="betRu"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Позиция"
          />
        </FormGroup>
        <Title level={5} style={{ textAlign: "center" }}>
          English
        </Title>
        <FormGroup>
          <Input
            value={inputsData.leagueEn.value}
            id="leagueEn"
            name="leagueEn"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Liga"
          />

          <Input
            value={inputsData.team1En.value}
            id="team1En"
            name="team1En"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Team 1"
          />

          <Input
            value={inputsData.team2En.value}
            id="team2En"
            name="team2En"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Team 2"
          />

          <Input
            value={inputsData.betEn.value}
            id="betEn"
            name="betEn"
            type="text"
            onChange={handleChange}
            style={{ width: "25%" }}
            placeholder="Bet"
          />
        </FormGroup>
        <Title level={5} style={{ textAlign: "center" }}>
          CF and Risk
        </Title>{" "}
        <FormGroup>
          <Input
            name="cf"
            placeholder="Գործակից"
            style={{ width: "25%" }}
            defaultValue={inputsData.cf.value}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <button onSubmit={onSubmit}>Edit Task</button>
      </Form>
    </Modal>
  );
};
