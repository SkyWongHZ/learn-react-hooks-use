import React, { useState, useEffect } from 'react';

interface PaginationParams<T> {
  // 全部内容的列表
  list: T[];
pageSize: number;
}

// 适用于一次从接口获取列表全部内容的情况
// 范型为单个列表项的类型
const usePagination = <T,>(params: PaginationParams<T>) => {
  const { list: originList, pageSize } = params;
  const list = Array.isArray(originList) ? originList : [];
  const total = list.length;

  const [visibleList, setVisibleList] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 入参为切换的新页码
  const onChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    setVisibleList(list.slice((pageNo - 1) * pageSize, pageNo * pageSize));
  };
  useEffect(() => {
    setVisibleList(list.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [originList]);

  return {
    visibleList: visibleList,
    currentPage: currentPage,
    total: total,
    pageSize: pageSize,
    onChange: onChange,
  };
};

export default usePagination;
