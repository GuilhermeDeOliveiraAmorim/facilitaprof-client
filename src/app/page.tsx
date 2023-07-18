import { Menu } from "./components/menu";
import { TitleSmall } from "./components/title/title.small";
import { colors, textSizes } from "./components/utils/colors";

export default function Home() {
  return (
    <div>
      <Menu.Root action={() => {}}>
        <Menu.Title
          titleType={
            <TitleSmall textSize={textSizes.extraSmall} title="Title small" />
          }
        />
        <Menu.SubTitle subTitle="Meu sub título" />
        <Menu.Button color={colors.danger} title="Enviar" />
      </Menu.Root>
    </div>
  );
}
