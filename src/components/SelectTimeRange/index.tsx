// @ts-ignore
import Slider from "rn-range-slider";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Container, Notch, Rail, RailSelected, Thumb } from "./styles";
import { convertPercentageDate } from "./helpers";
import Label from "./Label";
import useDebounce from "./debouce";

interface IProps {
  min: string;
  max: string;
  value: { min: string; max: string };
  onChange: (obj: any) => void;
}

const SelectTimeRange: React.FC<IProps> = ({ min, max, onChange }) => {
  const [low, setLow] = useState(0);

  const [high, setHigh] = useState(100);

  const lowBounce = useDebounce(low, 500);

  const highBounce = useDebounce(high, 500);

  const renderThumb = useCallback(() => <Thumb />, []);

  const renderRail = useCallback(() => <Rail />, []);

  const renderRailSelected = useCallback(() => <RailSelected />, []);

  const renderLabel = useCallback(
    (value) => <Label value={value} min={min} max={max} />,
    [min, max]
  );

  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  useEffect(() => {
    setLow(0);
    setHigh(100);
  }, [min, max]);

  useEffect(() => {
    const minValue = convertPercentageDate({ text: `${lowBounce}`, min, max });
    const maxValue = convertPercentageDate({ text: `${highBounce}`, min, max });
    onChange({ min: minValue, max: maxValue });
  }, [lowBounce, highBounce]);

  return (
    <Container>
      <Slider
        high={high}
        low={low}
        min={0}
        max={100}
        step={1}
        floatingLabel
        styles={{
          alignItems: "stretch",
          padding: 12,
          flex: 1,
          backgroundColor: "#555",
        }}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
    </Container>
  );
};

export default SelectTimeRange;
