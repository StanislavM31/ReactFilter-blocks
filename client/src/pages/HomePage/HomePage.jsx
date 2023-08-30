import { Input, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Pagination } from "@mantine/core";
import style from "./style.module.scss";
import arrayOfVacancies from "./assets/db"
import { useState, useEffect } from "react";

function HomePage() {
  const [elements, setElements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setPage] = useState(1)
  const elementsPerPage=5;

  useEffect(()=>setElements(arrayOfVacancies),[currentPage])

  //логика пагинации
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = elements.slice(indexOfFirstElement, indexOfLastElement);
  //смена страницы

  function pagination(){
    const number = event.target.textContent;
    setCurrentPage(number);
    setPage(number)
  }
  return (
    <>
      <Input
        icon={<IconSearch />}
        placeholder="Want to find a job ?"
        rightSection={
          <Button>
            FindJob
          </Button>
        }
      ></Input>
      <div className={style.containerCart}>
        {currentElements.map((el, index) => {
          return (
            <div key={index} className={style.cart}>
              <h1>{el.header}</h1>
              <div className={style.outerSalaryDay}>
                <p className={style.salary}>{el.salary}</p>
                <p>{el.day}</p>
              </div>
              <div className={style.outerSalaryDay}>
                <div className={style.icon}></div>
                <p>{el.city}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination value={activePage} onChange={pagination} total={Math.ceil(arrayOfVacancies.length / elementsPerPage)} />;

    </>
  );
}

export default HomePage;
