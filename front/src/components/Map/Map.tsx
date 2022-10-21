import { Box } from "@chakra-ui/react";
import { Clusterer, Map as YandexMap, Placemark } from "react-yandex-maps";

import { useApplications } from "../../store/apps/hooks";

const Map = (): JSX.Element => {
  const { applications } = useApplications();

  return (
    <Box w="full" h="100%">
      <YandexMap
        width="100%"
        height="100%"
        state={{
          center: [43.236079, 76.881579],
          zoom: 17,
        }}
      >
        <Clusterer>
          {applications.map((application) => (
            <Placemark
              key={application.id}
              geometry={[application.coords.lat, application.coords.long]}
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
