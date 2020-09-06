import React from "react";

import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { StarBorder as StarIcon, Done } from "@material-ui/icons";
import * as S from "./styles";

function Pricing({ formAppears, setFormAppears }) {
  const tiers = [
    {
      title: "Conta gratuita",
      description: [
        "crie a página da marca",
        "adicione as políticas empresariais",
        "veja o que estão falando da sua organização",
      ],
      buttonText: "Cadastre gratuitamente",
      buttonVariant: "outlined",
    },
    {
      title: "Conta Work",
      subheader: "Mais popular",
      description: [
        "crie a página da marca",
        "adicione as políticas empresariais",
        "veja o que estão falando da sua organização",
        "publique as vagas abertas",
        "receba currículos de mulheres interessadas",
        "mostre quais eventos sua empresa apoia",
      ],
      buttonText: "Contate-nos",
      buttonVariant: "contained",
    },
    {
      title: "Conta Lovelace",
      description: [
        "crie a página da marca",
        "adicione as políticas empresariais",
        "veja o que estão falando da sua organização",
        "publique as vagas abertas",
        "receba currículos de mulheres interessadas",
        "mostre quais eventos sua empresa apoia",
      ],
      buttonText: "Contate-nos",
      buttonVariant: "outlined",
    },
  ];

  return (
    !formAppears && (
      <S.ContainerStyled maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers?.map((tier) => (
            <Grid item key={tier?.title} xs={12} sm={12} md={4}>
              <Card>
                <S.CardHeaderStyled
                  title={tier?.title}
                  subheader={tier?.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={tier?.title === "Conta Work" ? <StarIcon /> : null}
                />
                <CardContent>
                  <S.Ul>
                    {tier?.description?.map((line) => (
                      <ListItem key={line}>
                        <ListItemIcon style={{ margin: "0" }}>
                          <Done />
                        </ListItemIcon>
                        <ListItemText primary={line} />
                      </ListItem>
                    ))}
                  </S.Ul>
                </CardContent>
                <CardActions>
                  {tier?.title === "Conta gratuita" ? (
                    <Button
                      fullWidth
                      variant={tier?.buttonVariant}
                      color="primary"
                      onClick={() => setFormAppears(true)}
                    >
                      {tier?.buttonText}
                    </Button>
                  ) : (
                    <Button
                      fullWidth
                      variant={tier?.buttonVariant}
                      color="primary"
                      target="_top"
                      rel="noopener noreferrer"
                      href={`mailto:adaworks.contato@gmail.com?subject=Subject&body="Quero cadastrar uma conta empresarial"`}
                    >
                      {tier?.buttonText}
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </S.ContainerStyled>
    )
  );
}

export default Pricing;
