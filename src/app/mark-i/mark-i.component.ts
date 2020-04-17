import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

interface HeroNode {
  url: any;
  name: string;
  children?: HeroNode[];
}

const TREE_DATA: HeroNode[] = [
  {
    name: 'Ironman', url: '',
        children: [
          {name: 'Mark I', url: '/marki'},
          {name: 'Mark II' , url: '/markii'},
          {name: 'Mark III', url: '/markI'},
          {name: 'Mark VIII: Silver Centurion', url: '/markI'},
          {name: 'Mark V', url: '/markI'},
          {name: 'Mark XVI: Sentient Armor', url: '/markI'},
          {name: 'Mark XL: Shotgun', url: '/markI'},
          {name: 'Mark XLIII: Stealth Suit V.3', url: '/markI'},
          {name: 'Mark XXIX: Extremis', url: '/markI'},
          {name: 'Mark XLI: Bones', url: '/markI'},
          {name: 'Mark XXXVII: Bleeding Edge', url: '/markI'},
          {name: 'Mark VII', url: '/markI'},
          {name: 'Mark IX', url: '/markI'},
          {name: 'Mark XXII: Thorbuster', url: '/markI'},
          {name: 'Mark XLIV: Hulkbuster', url: '/markI'},
          {name: 'Mark XLVI', url: '/markI'},
          {name: 'Mark XLVII', url: '/markI'},
          {name: 'Mark L', url: '/markI'},
          {name: 'Mark LXXXV', url: '/markI'},
        ]
  },
  {
    name: 'Spiderman', url: '/spiderman'
  },
  {
    name: 'Thor', url: '/thor'
  },
  {
    name: 'Hulk', url: '/hulk'
  },
  {
    name: 'Captain America', url: '/captain'
  },
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-mark-i',
  templateUrl: './mark-i.component.html',
  styleUrls: ['./mark-i.component.css']
})
export class MarkIComponent implements OnInit {

  //side-nav
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    private _transformer = (node: HeroNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: level,
        url: node.url
      };
    }
  
    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);
  
    treeFlattener = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);
  
    dataSources = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSources.data = TREE_DATA;

  }
  ngOnInit(): void {
  }
}

