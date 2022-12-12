import { AppBar, Typography, Box, CssBaseline, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import { FC } from "react";
import { routes } from "../routes";

export const Navbar: FC = () => {
  return (
    <AppBar position="sticky" sx={{ padding: "12px" }}>
      <CssBaseline />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Tooltip title="Go to the main page" arrow>
          <Link to={routes.customers.basePath}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 295 295"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <path
                      className="cls-1"
                      d="M147.6,0h-.2C66.12.05,0,66.19,0,147.49v0C0,228.83,66.16,295,147.48,295h0C228.84,295,295,228.82,295,147.5S228.88.05,147.6,0Zm-.1,287.06c-76.95,0-139.56-62.6-139.56-139.56S70.55,7.94,147.5,7.94,287.06,70.54,287.06,147.5,224.46,287.06,147.5,287.06Z"
                    />
                    <path
                      className="cls-1"
                      d="M229.17,196.89l-.38-.49-.36-.36-.4-.28-.51-.31-1.12-.7-3.18-2.07-3.23-2-3.27-2-3.29-1.91-3.34-1.87-3.38-1.81-3.15-1.62-3.19-1.58-3.2-1.54-2.44-1.11-2.44-1.09-2.46-1.07-2.49-1L184,172.71l-3.36-1.29-3.37-1.23-2.56-.89-2.57-.87-3.44-1.1-3.46-1-3.06-.88V165l-.06-1.74-.13-1.73-.21-1.71-.25-1.6.79-.56,2.93-2.12,2.9-2.16,2.86-2.2,2.13-1.67,2.12-1.69,2.09-1.71,2.77-2.31,2.73-2.35,2.71-2.38,2-1.81,2-1.82,2-1.85,2-1.86,2.56-2.51,2.53-2.54,2.49-2.58,2.46-2.6,2.42-2.64,2.39-2.66,2.35-2.69,2.31-2.72,2.27-2.75,3-3.72,2.91-3.77L224,96.75l5-6.87.18-.26.23-.4a4,4,0,0,0,0-3.58l-.21-.37-.35-.45-.42-.39-.45-.3-.62-.25-.54-.12-.71,0-.46,0-.23,0-.5.17-.47.23-.49.35-.43.43-.2.27-1.51,2.18-1.54,2.15-2.07,2.86L216,95.29l-2.15,2.8-2.19,2.78-2.23,2.74-2.26,2.72-2.78,3.23-2.82,3.18-2.87,3.14L195.77,119l-3,3.05-2.52,2.51L187.71,127l-2.59,2.45-2.62,2.41-2.66,2.38-2.68,2.35L174.34,139l-2.84,2.35-2.88,2.31-2.91,2.27-2.52,1.92-2.55,1.89-1.29.93-.48-1.11-.48-1,.44-.48,1-1.12,1.38-1.66,1.37-1.7.57-.74,1.36-1.88,1.29-1.93,1.23-2,1.17-2,1.12-2,1.08-2,1.5-3,1.43-3,1.38-3,1.33-3,1.67-4,1.6-4,1.56-4,1.5-4,1.47-4,1.43-4,2-5.89,2-5.91,1.92-5.93L193,71.32l2.45-7.93,2.38-8,2.34-8,2.29-8,2.05-7.31a3.72,3.72,0,0,0-2.08-4.41,3.65,3.65,0,0,0-1.58-.36,3.81,3.81,0,0,0-3.65,2.76l-2.1,7.48-3,10.24-2,6.81-2,6.8L186,68.32l-2.12,6.78-2.19,6.75-2.25,6.74-1.74,5-1.78,5-1.85,5-1.91,5L171,111.66l-1.26,3.06L169,116.4l0-1v-2.21l-.09-2.22-.18-2.21-.26-2.2-.27-1.71-.32-1.7-.38-1.69-.44-1.68-.5-1.66-.64-1.85-.72-1.83-.8-1.78-.66-1.29-.7-1.26-.77-1.23-.81-1.2-.75-1-.78-1-.85-.93-.89-.89-.94-.82-1-.78-1-.65-1-.59-1.05-.52-1.08-.44-.91-.3-.93-.23-1-.17-.95-.1-1,0-1,0-1,.13-1,.2-1,.27-.93.33-.92.39-.88.45-.87.5-1.09.75-1,.81-1,.88-.93.93-.87,1L134,87.1l-.83,1.17-.79,1.2-.73,1.24L131,92l-.63,1.29L129.6,95l-.68,1.77-.59,1.79-.53,1.81-.44,1.79L127,104l-.31,1.81-.25,1.82-.24,2.36-.13,2.37,0,2.37,0,1.81-1.32-3.13-1.43-3.53-1.39-3.54-1.86-4.94-1.8-5-1.76-5-1.7-5-2.21-6.69L110.44,73l-2.1-6.74-2-6.74-2-6.75-2-6.76L99.38,35.88l-1.59-5.67a3.8,3.8,0,0,0-3.65-2.77,3.85,3.85,0,0,0-1.65.38,3.72,3.72,0,0,0-2,4.4l2.12,7.52,2.93,10.18,3,10.15,2.06,6.76,2.1,6.74,2.16,6.73L107.05,87l2.28,6.69,2.36,6.67,1.46,4,1.49,4,1.55,4,1.6,4,1.68,3.91,1.46,3.28,1.53,3.24,1.6,3.21,1.24,2.36,1.29,2.36,1.35,2.33,1.41,2.28,1,1.51,1,1.48,1.09,1.44,1.81,2.24.93,1.11,1,1.1.44.49-.11.2-.52,1.09-.34.79-1.28-.92-2.54-1.89L129.31,146l-2.91-2.27-2.88-2.31L120.68,139l-2.82-2.39-2.69-2.35-2.65-2.37-2.63-2.42L107.3,127l-2.55-2.48-2.52-2.5-3-3.06-2.93-3.1-2.88-3.14-2.82-3.19-2.77-3.23-2.27-2.72-2.23-2.74-2.19-2.77L79,95.31l-2.12-2.83-2.08-2.86-1.53-2.15-1.56-2.24-.27-.34L71,84.48l-.52-.34-.46-.2-.48-.14-.32,0-.57,0L68,83.8l-.61.2-.59.32-.54.47-.39.49-.21.37a4,4,0,0,0,0,3.6l.12.22.11.18.49.69L71,96.77l2.85,3.82,2.92,3.76,3,3.72,2.28,2.75,2.31,2.72,2.34,2.7,2.39,2.66,2.42,2.63L94,124.14l2.49,2.57L99,129.25l2.57,2.51,1.94,1.86,2,1.85,2,1.82,2,1.81,2.7,2.38,2.74,2.35,2.76,2.31,2.1,1.71,2.11,1.68,2.13,1.68,2.87,2.2,2.9,2.16,2.93,2.12.77.55-.06.36-.26,1.76-.18,1.76-.11,1.76,0,1.53-3.09.88-3.46,1.05-3.44,1.1-2.57.86-2.55.9-3.38,1.23L111,172.72l-3.32,1.33-2.48,1-2.47,1.06-2.44,1.09-2.44,1.12-3.21,1.54-3.19,1.58-3.15,1.62-3.38,1.81-3.33,1.87-3.3,1.91-3.27,2-3.22,2L68,195.11l-1.19.73-.5.41-.44.55-.22.38a4,4,0,0,0,0,3.64l.18.31.36.46.42.4.5.32.49.21.61.15.59,0,.46,0,.4-.08.47-.16.42-.2.21-.13L73,200.67l2.19-1.41,2.93-1.85,3-1.8,3-1.76,3-1.72,3.08-1.68,3.1-1.62,3.14-1.58,3.17-1.54,3.21-1.48,3.23-1.44,3.25-1.39,3.29-1.34,3.31-1.28,3.34-1.24,3.37-1.19,2.9-1,2.93-.93,2.93-.9,2.06-.59.33,1.7.41,1.73.37,1.32.13.4-1.34,1.63-1.68,2.13-2,2.59-1.94,2.61-1.91,2.63-1.89,2.64-3.74,5.28-3.75,5.28-3.73,5.28L109,213.5l-3.65,5.34-3.61,5.34-21.42,31.9a3.81,3.81,0,0,0,1.26,5.42,3.84,3.84,0,0,0,1.9.51,3.75,3.75,0,0,0,3.14-1.69l1-1.55,6.85-10.26L98,243.39l3.47-5.12,3.8-5.57,7.66-11.15,3.82-5.6,3.8-5.61,3.81-5.59,2.89-4.18,2.93-4.14,1.8-2.48,1.79-2.48,1.8-2.43,2.72-3.44.68.91.59.7.62.67.68.64.71.59.76.55.68.42.72.37.75.33.78.25.78.18.78.1.75,0,.82,0,.76-.11.75-.18.74-.24.84-.37.81-.43.75-.49.72-.54.8-.71.76-.76.69-.81.64-.83.2-.3.88,1.07,1.91,2.45,1.88,2.52,1.85,2.58,1.81,2.6,1.78,2.63,3.56,5.29,3.58,5.26,3.62,5.24,6.37,9.11,2.72,3.89,4.31,6.26,4.27,6.28,4.24,6.29,4.21,6.31,4.67,7a3.72,3.72,0,0,0,3.11,1.68,3.65,3.65,0,0,0,1.88-.53,3.77,3.77,0,0,0,1.79-2.41,3.64,3.64,0,0,0-.54-2.89l-13.79-20.46-4.24-6.31-4.22-6.33-5.27-7.93-2.67-4-2.69-3.95-2.74-3.93-2.79-3.88-2.24-3.07-2.26-3L168,188.18l-3.11-4.28-1.59-2.13-1.63-2.1-1.28-1.58.35-1.18.42-1.65.35-1.66.1-.64,2,.59,2.94.89,2.92.94,2.91,1,3.36,1.18,3.34,1.24,3.31,1.29,3.29,1.33,3.26,1.39,3.23,1.44,3.2,1.48,3.17,1.54,3.15,1.58,3.1,1.62,3.07,1.68,3.05,1.72,3,1.75,3,1.81,2.94,1.85,2.18,1.4,2.25,1.5.37.2.4.17.43.11.27,0,.55,0,.65-.07.62-.19.58-.3.5-.41.41-.49.27-.46a4,4,0,0,0,0-3.57Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </Tooltip>
        <Tooltip title="Back to customers" arrow>
          <Link to={routes.customers.basePath} style={{ color: "#FFF" }}>
            Main page
          </Link>
        </Tooltip>
        <Tooltip title="Spidertracks' the basic CRM" arrow>
          <Typography>Spidertracks </Typography>
        </Tooltip>
      </Box>
    </AppBar>
  );
};
