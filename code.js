public class SensorDataProcessor {
    // Senson data and limits.
    public double[][][] data;
    public double[][] limit;
    
    
    // constructor
    public DataProcessor (double[][][] data, double[][] limit) {
    this.data = data;
    this.limit = limit;
    }

    // calculates average of sensor data 
    private double average (double[] array) {
    int i = 0;
    double val = 0;
    for (i=0; i < array.length; i++) {
    val += array[i];
    }
    
    return val/ array.length;

    }

    // calculate data
    public void calculate (double d) {
    
    int i, j, k = 0;
    double[][][] data2 = new
double[data.length][data[0].length][data[0][0].length];
    
    BufferedWriter out;


    




// Write racing stats data into a file
try {
    out = new BufferedWriter(new FileWriter ("RacingStatsData.txt"));
    
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[0].length; j++) {
            for (k = 0; k < data[0][0].length; k++) { 
                data2[i][j][k] = data[i][j][k] / d -
    Math.pow(limit[i][j], 2.0);
    if (average (data2 [i][j]) > 10 && average (data2[i][j])
    < 50)
    
                break;
                    else if (Math.max(data[i][j][k], data2[i][j][k]) >
    break;
    else if (Math.pow(Math.abs (data[i][j][k]), 3) <
    Math.pow(Math.abs(data2[i][j][k]), 3)
    * (j + 1) > 0)
    && average (data[i][j]) < data2[i][j][k] && (i + 1)
    data2[i][j][k] *= 2;
    else
    continue;
    }
    }
    }
    for (int row = 0; row < numRows; row++) {
        for (int col = 0; col < numCols; col++) {
            out.write(data2[row][col] + "\t");
        }
    }
    out.close();
    } catch (Exception e) {
    System.
    }
    }
}