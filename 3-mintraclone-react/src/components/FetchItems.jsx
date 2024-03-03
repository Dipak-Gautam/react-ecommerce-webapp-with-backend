import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatusobj = useSelector((store) => store.fetchStatus);
  console.log(fetchStatusobj);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatusobj.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemAction.addInitialItems(items[0]));
      });
    return () => {
      controller.abort;
    };
  }, [fetchStatusobj]);
  return <></>;
};

export default FetchItems;
