import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton";

export default function ProductTableSkeleton() {
  return (
    <>
      {Array.from(Array(6).keys()).map((item) => (
        <TableRow
          key={item}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell scope="row">
            <Skeleton variant="text" height={25} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" height={25} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" height={25} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" height={25} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" height={25} />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" height={25} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
