package graphs.testing;

import graphs.algorithms.DepthFirstSearch;
import graphs.data.UnweightedNode;
import graphs.data.WeightedNode;
import java.util.Arrays;
import java.util.HashMap;

public class Tests {
    public static void testUnweighted() {
        String[] order = new String[] { "root", "apple", "banana", "red", "yellow" };
        HashMap<String, UnweightedNode<string>> nodes = new HashMap<String, UnweightedNode<string>>();

        for (String key : order) {
            UnweightedNode<string> node = new UnweightedNode<string>(key);
            nodes[key] = node;
        }

        HashMap<String, String[]> adjacencies = new HashMap<String, String[]>() {{
            put("root", new String[] { "apple", "banana" });
            put("apple", new String[] { "red", "yellow" });
            put("banana", new String[] { "yellow" });
            put("red", new String[0]);
            put("yellow", new String[0]);
        }};

        for (String key : order) {
            UnweightedNode<string> node = nodes[key];
            String[] neighborKeys = adjacencies[key];

            for (String neighborKey : neighborKeys) {
                node.addNeighbor(nodes[neighborKey]);
                System.out.println(String.format("%0$s borders %1$s", key, neighborKey));
            }
        }

        for (UnweightedNode<string> node : DepthFirstSearch.unweightedDepthFirstSearch(nodes["root"])) {
            System.out.println(node.data);
        }
    }

    public static void testWeighted() {
        System.out.println("Hello, world!");
    }
}
