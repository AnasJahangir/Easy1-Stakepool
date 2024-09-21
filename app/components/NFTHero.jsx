import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import TheMandrillz from "../assets/TheMandrillz.png";
import VerifiedRounded from "../assets/VerifiedRounded.png";

function NFTHero() {
  return (
    <div>
      <h1 className="text-[34px] sm:text-[54px] md:text-[64px] pt-20 mb-10 font-semibold text-center">
        NFT Raffle
      </h1>
      <div className="flex justify-center">
        <Box className="my-20">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl">
            {/* First Pool Card */}
            <Card
              variant="outlined"
              className="relative w-[310px]   md:w-[380px] lg:w-[450px]  "
              style={{
                borderWidth: "1px",
                background: "none",
              }}
            >
              <Image src={TheMandrillz} alt="nft" className="h-full object-cover rounded-3xl " />
            </Card>
            <Card
              variant="outlined"
              className="relative w-[310px]  md:w-[380px] lg:w-[450px] rounded-3xl p-3   border-2 border-[#999999] "
              style={{
                borderWidth: "1px",
                background: "none",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  className="font-semibold text-white mb-3"
                >
                  TheMandrillz #1013
                </Typography>
                <Typography
                  variant="h6"
                  className=" text-white mb-5 flex  items-center"
                >
                  The Mandrillz{" "}
                  <Image src={VerifiedRounded} className="w-5 ms-2" alt="nft" />
                </Typography>
                <Typography variant="h7" className=" text-white font-normal ">
                  This is a collection of 8888 unique Mandrillz. A meteor
                  strikes near a zoo and the mandrill enclosure is largely
                  destroyed....
                </Typography>
                <Box className="text-white mt-10">
                  <Box className="flex justify-between mb-6 pb-1 border-b border-dotted border-[#999999]">
                    <Typography variant="body1" className="font-semibold">
                      Wen
                    </Typography>
                    <Typography className=" text-white">Expired</Typography>
                  </Box>
                  <Box className="flex justify-between mb-6 pb-1 border-b border-dotted border-[#999999]">
                    <Typography variant="body1" className="font-semibold">
                      Tickets
                    </Typography>
                    <Typography className=" text-white">0/10</Typography>
                  </Box>
                  <Box className="flex justify-between mb-6 pb-1 border-b border-dotted border-[#999999]">
                    <Typography variant="body1" className="font-semibold">
                      My Entries
                    </Typography>
                    <Typography className=" text-white">0/3</Typography>
                  </Box>
                  <Box className="flex justify-between mb-6 pb-1 border-b border-dotted border-[#999999]">
                    <Typography variant="body1" className="font-semibold">
                      Status
                    </Typography>
                    <Typography className=" text-white">
                      Drawing Winner
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default NFTHero;
