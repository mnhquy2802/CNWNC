import anytree.exporter as atex
import anytree as at
import json

a_str_json = ("""
{"status": 200, "message": "Detect no threst on this infomation", "data": {"risk_level": 0}}
""")

a_dict = json.loads(a_str_json)
print("a_dict : ----> ", a_dict)
def tree_builder(d, p_uid="root", l=0):

    for i, (k, v) in enumerate(d.items()):
        node_uid = "l{}n{}".format(l, i)
        print("kkkkk : ----------> ", k)
        print("p_uid : ---------->", p_uid)
        node = nodes[k] = at.Node(
            name   = node_uid,
            key    = k,
            parent = nodes[p_uid]
        )
        if isinstance(v, dict):
            node.an_attr = ""
            print("L + 1", l + 1)
            print(" K  : ----------> ", k)
            print("v : ------> ", v)
            tree_builder(v, k, l + 1)
        else:
            node.an_attr = v
            
            
root  = at.Node(name='root', key='root', an_attr='')
nodes = {'root' : root}
tree_builder(a_dict)

#for pre, fill, node in at.RenderTree(root):
#    print("%s%s|%s" % (pre, node.key, node.an_attr))

atex.DotExporter(
    root, nodeattrfunc = lambda n : 'label="{}\n{}"'.format(n.key, n.an_attr)
).to_picture("./tmp/root.png")