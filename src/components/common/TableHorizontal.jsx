import React from 'react';
import styled from 'styled-components';

const TableHorizontal = () => {

  return (
    <>
      <Table className='job-details'>
        <tbody>
          <tr>
            <th scope='row'>Date Posted:</th>
            <td>02/23/23</td>
          </tr>
          <tr>
            <th scope='row'>Remote Work Level:</th>
            <td>100% Remote</td>
          </tr><tr>
            <th scope='row'>Location:</th>
            <td>US National <span className='icn-us' title='Job open to candidates located anywhere in the US'></span></td>
          </tr>
          <tr>
            <th scope='row'>Job Type:</th>
            <td>Employee</td>
          </tr>
          <tr>
            <th scope='row'>Job Schedule:</th>
            <td>  Full-Time
            </td>
          </tr>
          <tr>
            <th scope='row'>Career Level:</th>
            <td>Manager</td>
          </tr>
          <tr>
            <th scope='row'>Travel Required:</th>
            <td>No</td>
          </tr>
          <tr>
            <th scope='row'>Hours per Week:</th>
            <td>40</td>
          </tr>
          <tr>
            <th scope='row'>Categories:</th>
            <td><a href='/remote-jobs/account-management'>Account Management</a>, <a href='/remote-jobs/online-client-services'>Client Services</a>, <a href='/remote-jobs/advertising-pr'>Advertising &amp; PR</a></td>
          </tr>
          <tr>
            <th scope='row'>Company:</th>
            <td className='add-blur'>Company name here</td>
          </tr>
          <tr>
            <th scope='row'>Benefits:</th>
            <td className='add-blur'>Other benefits listed here</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableHorizontal;

const Table = styled.table`
  caption-side: bottom;
  border-collapse: collapse;
  text-align: left;
  max-width: 56rem;
  th {
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.black};
    padding-right: 1.5rem;
  }
  td {
    padding-bottom: 1.5rem;
  }
  a {
    color: ${props => props.theme.colors.primaryLight};
    text-decoration: none;
    &:hover, &:active, &:focus {
        color: ${props => props.theme.colors.primaryDark};
        text-decoration: underline;
    }
  }
  .icn-us, .icn-world, .icn-canada {
    width: 1.6rem;
    height: 1.4rem;
    margin: 0 .2rem;
    background-size: contain;
    display: inline-block;
    position: relative;
    top: .4rem;
  }
  .icn-us {
    background: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxMS44MTNweCIgdmlld0JveD0iMCAwIDE0IDExLjgxMyIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTQgMTEuODEzIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHJlY3QgZmlsbD0iI0ZGRkZGRiIgd2lkdGg9IjE0IiBoZWlnaHQ9IjExIi8+CjxyZWN0IGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjIiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjQiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjYiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjgiIGZpbGw9IiNFQTA5MjAiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxIi8+CjxyZWN0IHk9IjEwIiBmaWxsPSIjRUEwOTIwIiB3aWR0aD0iMTQiIGhlaWdodD0iMSIvPgo8cmVjdCBmaWxsPSIjMEUwRTZEIiB3aWR0aD0iOCIgaGVpZ2h0PSI2Ljk1OCIvPgo8L3N2Zz4=) no-repeat;
  }
`;