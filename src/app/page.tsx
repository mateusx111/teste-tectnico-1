import Image from "next/image";
import Buttom from "../components/buttom";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24 text-black bg-white">
        <div className="relative flex flex-col shadow-lg rounded-lg w-full border-x">
          <table className="rounded-2xl">
            <thead className=" bg-gray-50 h-14">
              <tr>
                <th className="text-xs text-gray-500 text-left p-4 font-semibold w-[287px]">
                  CAR
                </th>
                <th className="text-xs  text-gray-500 text-left p-4 font-semibold w-[332.67px]">
                  NEXT RESERVATION
                </th>
                <th className="text-xs text-gray-500 text-left p-4 font-semibold w-[332.67px]">
                  STATUS
                </th>
                <th className="text-xs  text-gray-500 text-left p-4 font-semibold w-[332.67px]">
                  RATING
                </th>
                <th className="text-xs  text-gray-500 text-left p-4 font-semibold w-[91px]">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={60}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>

              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={60}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>

              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={60}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>

              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={60}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>

              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={50}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>

              <tr className="h-[50px] border-t">
                <th className="text-sm font-normal gray-900 flex pl-4 py-1 items-center gap-2 ">
                  <div>
                    <Image
                      className="rounded-[2px]  "
                      src="/car.svg"
                      width={70}
                      height={60}
                      alt="car"
                    />
                  </div>
                  Mini Cooper 2020
                </th>
                <td className="text-sm font-normal text-gray-500 p-4">11/07</td>
                <td className="p-4">
                  <Buttom />
                </td>
                <td className="p-4">
                  <Image src="/star.svg" width={100} height={100} alt="star" />
                </td>
                <td className="p-4 pl-11">
                  <Image src="/dot.svg" width={7} height={4} alt="dots" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
