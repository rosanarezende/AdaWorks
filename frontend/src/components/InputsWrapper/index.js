import React from "react";

import * as S from "./styles";

function InputsWrapper({ list, formInfo, getFormInfo }) {
  return (
    <S.InputsWrapper>
      {list?.map((field) => {
        return (
          <S.Input
            key={field.name}
            variant="outlined"
            margin="normal"
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            value={formInfo[field.name] || ""}
            onChange={getFormInfo}
            type={field.type}
            required
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: field.endAdornment,
              inputProps: {
                pattern: field.pattern,
                title: field.title,
              },
            }}
          />
        );
      })}
    </S.InputsWrapper>
  );
}

export default InputsWrapper;
