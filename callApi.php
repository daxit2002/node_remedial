<!-- index.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Table</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }
        th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Data Table</h1>

    <?php
    $nodeApiUrl = 'http://localhost:8080/';
    $jsonData = file_get_contents($nodeApiUrl);
    $data = json_decode($jsonData, true);

    if ($data) {
        echo '<table>';
        echo '<tr>
        <th>Name</th>
        <th>Category Name</th>
        <th>Description</th>
        <th>Area</th>
        <th>Propert Image</th>
        <th>Price</th>
        <th>Number of years</th>
        </tr>';

        foreach ($data as $item) {
            echo '<tr>';
            echo '<td>' . $item['property_name'] . '</td>';
            echo '<td>' . $item['property_category_name'] . '</td>';
            echo '<td>' . $item['description'] . '</td>';
            echo '<td>' . $item['area'] . '</td>';
            echo '<td>' . $item['property_picture'] . '</td>';
            echo '<td>' . $item['price'] . '</td>';
            echo '<td>' . $item['numbers_of_years'] . '</td>';
            echo '</tr>';
        }

        echo '</table>';
    } else {
        echo 'Error fetching data from the Node.js API.';
    }
    ?>
</body>
</html>
