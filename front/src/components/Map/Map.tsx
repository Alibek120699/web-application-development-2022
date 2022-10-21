import { Box } from "@chakra-ui/react";
import { Clusterer, Map as YandexMap, Placemark } from "react-yandex-maps";

import { useShopList } from "../../store/shops/hooks";

const CENTER = [43.236079, 76.881579];

const Map = (): JSX.Element => {
  const { shops } = useShopList();

  return (
    <Box w="full" h="100%">
      <YandexMap
        width="100%"
        height="100%"
        state={{
          center: CENTER,
          zoom: 17,
        }}
      >
        <Clusterer>
          {shops.map((shop) => (
            <Placemark
              key={shop.id}
              geometry={[shop.coords.lat, shop.coords.long]}
              onClick={() => console.log("clicked")}
              options={{
                iconLayout: "default#image",
                iconImageHref: "/vite.svg",
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
              }}
            />
          ))}
        </Clusterer>
      </YandexMap>
    </Box>
  );
};

export default Map;
